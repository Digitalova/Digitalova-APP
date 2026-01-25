const fs = require('fs');

const filePath = 'd:/DIGITALOVA/GitHub/Digitalova/Digitalova-projet/app/nous-suivre/page.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Remove the Finalité paragraph
content = content.replace(
  /<p className="text-xs text-slate-400 leading-relaxed">[\s\S]*?<\/p>\s*<\/div>\s*<Button/,
  `</div>

      <Button`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed nous-suivre page');
