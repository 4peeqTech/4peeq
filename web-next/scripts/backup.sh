#!/bin/bash
# Backup script for Payload CMS Postgres DB
# To be run via cron on the VPS

set -e

# Configuration
BACKUP_DIR="/var/backups/payload"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
DB_CONTAINER="web-next-db-1" # Adjust according to docker-compose project name
DB_USER="payload"
DB_NAME="payload"

# Ensure backup directory exists
mkdir -p "$BACKUP_DIR"

# File name
BACKUP_FILE="$BACKUP_DIR/db_backup_$TIMESTAMP.sql.gz"

echo "Starting backup of database $DB_NAME..."

# Run pg_dump inside the container and gzip the output
docker exec -t $DB_CONTAINER pg_dump -U $DB_USER -d $DB_NAME -F c | gzip > "$BACKUP_FILE"

echo "Backup completed: $BACKUP_FILE"

# Keep only the last 7 days of backups
find "$BACKUP_DIR" -type f -name "db_backup_*.sql.gz" -mtime +7 -exec rm {} \;
echo "Old backups cleaned up."

# To restore:
# gunzip -c /var/backups/payload/db_backup_TIMESTAMP.sql.gz | docker exec -i web-next-db-1 pg_restore -U payload -d payload -c
