#!/bin/bash
# Poll Kling v3 requests and download completed videos
FAL_KEY=$(grep FAL_KEY /Users/halpininc/.openclaw/workspace/.env | cut -d= -f2)
OUTDIR="/Users/halpininc/.openclaw/workspace/deliverables/video-clips"
FINALDIR="/Users/halpininc/.openclaw/workspace/deliverables/video-final"
mkdir -p "$OUTDIR" "$FINALDIR"

declare -A REQUESTS
REQUESTS[v1-clip1]="019d2628-a61e-70d0-ab9b-b7f09f76a6ce"
REQUESTS[v1-clip2]="019d2628-ec63-7f50-b48a-adc30a817515"
REQUESTS[v1-clip3]="019d2628-ed09-7222-b81e-bf89ece9f7a6"
REQUESTS[v2-clip1]="019d2628-eda5-7d82-b110-64874b703038"
REQUESTS[v2-clip2]="019d2628-ee46-7c13-8bb1-3c3b144cff6c"
REQUESTS[v2-clip3]="019d2628-eee8-7af1-94fc-631bbdbd9653"

COMPLETED=0
TOTAL=6
ATTEMPTS=0
MAX_ATTEMPTS=30  # 30 * 30s = 15 min max

while [ $COMPLETED -lt $TOTAL ] && [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; do
    ATTEMPTS=$((ATTEMPTS + 1))
    echo "--- Poll attempt $ATTEMPTS ($(date)) ---"
    COMPLETED=0
    
    for NAME in v1-clip1 v1-clip2 v1-clip3 v2-clip1 v2-clip2 v2-clip3; do
        REQ_ID="${REQUESTS[$NAME]}"
        
        # Skip if already downloaded
        if [ -f "$OUTDIR/$NAME.mp4" ] && [ -s "$OUTDIR/$NAME.mp4" ]; then
            COMPLETED=$((COMPLETED + 1))
            echo "$NAME: already downloaded ✅"
            continue
        fi
        
        STATUS_JSON=$(curl -s -X POST "https://queue.fal.run/fal-ai/kling-video/v2/standard/image-to-video/requests/$REQ_ID/status" \
            -H "Authorization: Key $FAL_KEY" \
            -H "Content-Type: application/json")
        
        STATUS=$(echo "$STATUS_JSON" | python3 -c "import sys,json; print(json.load(sys.stdin).get('status','unknown'))" 2>/dev/null)
        echo "$NAME ($REQ_ID): $STATUS"
        
        if [ "$STATUS" = "COMPLETED" ]; then
            # Fetch the result
            RESULT=$(curl -s -X POST "https://queue.fal.run/fal-ai/kling-video/v2/standard/image-to-video/requests/$REQ_ID" \
                -H "Authorization: Key $FAL_KEY" \
                -H "Content-Type: application/json")
            
            VIDEO_URL=$(echo "$RESULT" | python3 -c "
import sys, json
d = json.load(sys.stdin)
url = d.get('video',{}).get('url','')
if not url:
    url = d.get('data',{}).get('video',{}).get('url','')
if not url:
    # Try to find any URL in output
    import re
    urls = re.findall(r'https://[^\s\"]+\.mp4[^\s\"]*', json.dumps(d))
    url = urls[0] if urls else ''
print(url)
" 2>/dev/null)
            
            if [ -n "$VIDEO_URL" ] && [ "$VIDEO_URL" != "" ]; then
                curl -sL "$VIDEO_URL" -o "$OUTDIR/$NAME.mp4"
                SIZE=$(stat -f%z "$OUTDIR/$NAME.mp4" 2>/dev/null || stat -c%s "$OUTDIR/$NAME.mp4" 2>/dev/null)
                echo "  Downloaded: $NAME.mp4 ($SIZE bytes) ✅"
                COMPLETED=$((COMPLETED + 1))
            else
                echo "  COMPLETED but no video URL found! Response:"
                echo "$RESULT" | head -5
            fi
        elif [ "$STATUS" = "FAILED" ]; then
            echo "  ❌ FAILED"
            echo "$STATUS_JSON" | python3 -m json.tool 2>/dev/null | head -10
        fi
    done
    
    echo "Completed: $COMPLETED / $TOTAL"
    
    if [ $COMPLETED -lt $TOTAL ]; then
        echo "Waiting 30s..."
        sleep 30
    fi
done

echo ""
echo "=== FINAL STATUS ==="
ls -la "$OUTDIR"/*.mp4 2>/dev/null || echo "No clips downloaded"

# If all 6 downloaded, combine into final videos
if [ -f "$OUTDIR/v1-clip1.mp4" ] && [ -f "$OUTDIR/v1-clip2.mp4" ] && [ -f "$OUTDIR/v1-clip3.mp4" ]; then
    echo "Combining Video 1..."
    echo "file '$OUTDIR/v1-clip1.mp4'" > /tmp/v1-list.txt
    echo "file '$OUTDIR/v1-clip2.mp4'" >> /tmp/v1-list.txt
    echo "file '$OUTDIR/v1-clip3.mp4'" >> /tmp/v1-list.txt
    ffmpeg -y -f concat -safe 0 -i /tmp/v1-list.txt -c copy "$FINALDIR/tidy-tails-get-your-yard-back.mp4" 2>/dev/null
    echo "Video 1 done: $FINALDIR/tidy-tails-get-your-yard-back.mp4"
fi

if [ -f "$OUTDIR/v2-clip1.mp4" ] && [ -f "$OUTDIR/v2-clip2.mp4" ] && [ -f "$OUTDIR/v2-clip3.mp4" ]; then
    echo "Combining Video 2..."
    echo "file '$OUTDIR/v2-clip1.mp4'" > /tmp/v2-list.txt
    echo "file '$OUTDIR/v2-clip2.mp4'" >> /tmp/v2-list.txt
    echo "file '$OUTDIR/v2-clip3.mp4'" >> /tmp/v2-list.txt
    ffmpeg -y -f concat -safe 0 -i /tmp/v2-list.txt -c copy "$FINALDIR/tidy-tails-party-panic.mp4" 2>/dev/null
    echo "Video 2 done: $FINALDIR/tidy-tails-party-panic.mp4"
fi

echo "=== ALL DONE ==="
