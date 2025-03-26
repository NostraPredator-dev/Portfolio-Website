#!/bin/bash
# Find all .tsx and .ts files in client/src (excluding node_modules)
find client/src -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "*/node_modules/*" | while read file; do
  # Replace @/lib with ./lib or ../lib depending on directory depth
  sed -i 's|@/lib/|../lib/|g' "$file"
  sed -i 's|"@/components/|"../components/|g' "$file"
  sed -i 's|"@/hooks/|"../hooks/|g' "$file"
  sed -i 's|"@/pages/|"../pages/|g' "$file"
done

chmod +x fix_imports.sh
./fix_imports.sh
