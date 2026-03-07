#!/bin/bash
# Memory Archival Script
# Run monthly to archive old memory files and prevent bloat

MEMORY_DIR="/Users/halpininc/.openclaw/workspace/memory"
ARCHIVE_DIR="$MEMORY_DIR/archive"
CURRENT_MONTH=$(date +%Y-%m)
ARCHIVE_MONTH_DIR="$ARCHIVE_DIR/$CURRENT_MONTH"

# Create archive directory if needed
mkdir -p "$ARCHIVE_MONTH_DIR"

echo "🗂️ Memory Archival - $CURRENT_MONTH"
echo "=================================="

# 1. Archive old daily logs (older than 30 days)
echo ""
echo "📅 Archiving daily logs older than 30 days..."
find "$MEMORY_DIR/daily-logs" -name "*.md" -mtime +30 -exec mv {} "$ARCHIVE_MONTH_DIR/" \; 2>/dev/null
DAILY_ARCHIVED=$(ls "$ARCHIVE_MONTH_DIR"/*.md 2>/dev/null | wc -l | tr -d ' ')
echo "   Archived: $DAILY_ARCHIVED files"

# 2. Archive old date-stamped memory files
echo ""
echo "📝 Archiving old dated memory files..."
for file in "$MEMORY_DIR"/202[0-9]-[0-9][0-9]-[0-9][0-9].md; do
    if [ -f "$file" ]; then
        # Get file date from name
        filename=$(basename "$file")
        file_date=$(echo "$filename" | sed 's/.md//')
        
        # If older than 30 days, archive
        if [[ $(date -j -f "%Y-%m-%d" "$file_date" +%s 2>/dev/null) ]]; then
            days_old=$(( ($(date +%s) - $(date -j -f "%Y-%m-%d" "$file_date" +%s)) / 86400 ))
            if [ $days_old -gt 30 ]; then
                mv "$file" "$ARCHIVE_MONTH_DIR/"
                echo "   Archived: $filename ($days_old days old)"
            fi
        fi
    fi
done

# 3. Trim franklin-tasks.md to last 500 lines (keep recent, archive rest)
TASKS_FILE="$MEMORY_DIR/franklin-tasks.md"
if [ -f "$TASKS_FILE" ]; then
    LINES=$(wc -l < "$TASKS_FILE" | tr -d ' ')
    if [ $LINES -gt 500 ]; then
        echo ""
        echo "✂️ Trimming franklin-tasks.md ($LINES lines → 500)..."
        
        # Save old content to archive
        head -n $(($LINES - 500)) "$TASKS_FILE" > "$ARCHIVE_MONTH_DIR/franklin-tasks-archived.md"
        
        # Keep only last 500 lines
        tail -n 500 "$TASKS_FILE" > "$TASKS_FILE.tmp"
        
        # Add header back
        echo "# Franklin Tasks Log" > "$TASKS_FILE"
        echo "" >> "$TASKS_FILE"
        echo "*Archived $(($LINES - 500)) older entries to archive/$CURRENT_MONTH/*" >> "$TASKS_FILE"
        echo "" >> "$TASKS_FILE"
        cat "$TASKS_FILE.tmp" >> "$TASKS_FILE"
        rm "$TASKS_FILE.tmp"
        
        echo "   Trimmed $(($LINES - 500)) lines, archived to franklin-tasks-archived.md"
    fi
fi

# 4. Trim ad-copy-archive.md similarly
ADS_FILE="$MEMORY_DIR/ad-copy-archive.md"
if [ -f "$ADS_FILE" ]; then
    LINES=$(wc -l < "$ADS_FILE" | tr -d ' ')
    if [ $LINES -gt 300 ]; then
        echo ""
        echo "✂️ Trimming ad-copy-archive.md ($LINES lines → 300)..."
        
        head -n $(($LINES - 300)) "$ADS_FILE" > "$ARCHIVE_MONTH_DIR/ad-copy-archived.md"
        tail -n 300 "$ADS_FILE" > "$ADS_FILE.tmp"
        
        echo "# Ad Copy Archive" > "$ADS_FILE"
        echo "" >> "$ADS_FILE"
        echo "*Archived $(($LINES - 300)) older entries to archive/$CURRENT_MONTH/*" >> "$ADS_FILE"
        echo "" >> "$ADS_FILE"
        cat "$ADS_FILE.tmp" >> "$ADS_FILE"
        rm "$ADS_FILE.tmp"
        
        echo "   Trimmed $(($LINES - 300)) lines"
    fi
fi

# 5. Summary
echo ""
echo "=================================="
echo "✅ Archival complete!"
echo "Archive location: $ARCHIVE_MONTH_DIR"
ls -la "$ARCHIVE_MONTH_DIR" 2>/dev/null || echo "(empty)"
