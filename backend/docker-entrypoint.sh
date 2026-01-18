#!/bin/sh
set -e

# Export variables from .env file
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Run the command
exec "$@"
