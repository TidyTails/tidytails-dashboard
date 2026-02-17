#!/bin/bash
# Update Franklin's status on the dashboard
# Usage: ./update-franklin-status.sh [idle|working|thinking] ["task description"]

STATUS="${1:-idle}"
TASK="${2:-}"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

DASHBOARD_DIR="$HOME/.openclaw/workspace/dashboard"

cat > "$DASHBOARD_DIR/status.json" << EOF
{
  "state": "$STATUS",
  "currentTask": ${TASK:+\"$TASK\"}${TASK:-null},
  "lastUpdate": "$TIMESTAMP"
}
EOF

cd "$DASHBOARD_DIR"
git add status.json
git commit -m "Status: $STATUS${TASK:+ - $TASK}" --quiet 2>/dev/null
git push --quiet 2>/dev/null

echo "✅ Status updated: $STATUS"
