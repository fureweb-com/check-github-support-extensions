const fs = require('fs')
const exts = ["html","htm","xhtml","html_vm","asp","jade","pug","md","markdown","rst","blink","css","scss","sass","less","json","jinja","jinja2","j2","sublime-project","sublime-workspace","yaml","YAML-tmLanguage","yml","xml","plist","xsd","dtd","xsl","xslt","resx","iml","xquery","tmLanguage","manifest","project","png","jpeg","jpg","gif","svg","ico","tif","tiff","psd","psb","ami","apx","bmp","bpg","brk","cur","dds","dng","exr","fpx","gbr","img","jbig2","jb2","jng","jxr","pbm","pgf","pic","raw","webp","eps","js","esx","mjs","jsx","tsx","routing.ts","routing.js","routes.ts","routes.js","action.js","actions.js","action.ts","actions.ts","reducer.js","reducers.js","reducer.ts","reducers.ts","store.js","store.ts","ini","dlc","dll","config","conf","properties","prop","settings","option","props","toml","prefs","sln.dotsettings","sln.dotsettings.user","cfg","ts","d.ts","marko","pdf","xlsx","xls","csv","tsv","vscodeignore","vsixmanifest","vsix","code-workplace","csproj","ruleset","sln","suo","vb","vbs","vcxitems","vcxitems.filters","vcxproj","vcxproj.filters","pdb","sql","pks","pkb","accdb","mdb","sqlite","pgsql","postgres","psql","cs","csx","zip","tar","gz","xz","bzip2","gzip","7z","rar","tgz","exe","msi","java","jar","jsp","c","m","h","cc","cpp","mm","cxx","hpp","go","py","pyc","whl","url","sh","ksh","csh","tcsh","zsh","bash","bat","cmd","awk","fish","ps1","psm1","psd1","ps1xml","psc1","pssc","gradle","doc","docx","rtf","cer","cert","crt","pub","key","pem","asc","gpg","woff","woff2","ttf","eot","suit","otf","bmap","fnt","odttf","ttc","font","fonts","sui","ntf","mrf","lib","bib","rb","erb","fs","fsx","fsi","fsproj","swift","ino","dockerignore","dockerfile","tex","cls","sty","pptx","ppt","pptm","potx","potm","ppsx","ppsm","pps","ppam","ppa","webm","mkv","flv","vob","ogv","ogg","gifv","avi","mov","qt","wmv","yuv","rm","rmvb","mp4","m4v","mpg","mp2","mpeg","mpe","mpv","m2v","vdi","vbox","vbox-prev","ics","mp3","flac","m4a","wma","aiff","coffee","txt","graphql","gql","rs","raml","xaml","hs","kt","kts","patch","lua","clj","cljs","groovy","r","rmd","dart","as","mxml","ahk","swf","swc","cmake","asm","a51","inc","nasm","s","ms","agc","ags","aea","argus","mitigus","binsource","vue","ml","mli","cmx","js.map","mjs.map","css.map","lock","hbs","mustache","pl","pm","hx","spec.ts","test.ts","ts.snap","spec.tsx","test.tsx","tsx.snap","spec.jsx","test.jsx","jsx.snap","spec.js","test.js","js.snap","module.ts","module.js","ng-template","component.ts","component.js","guard.ts","guard.js","service.ts","service.js","pipe.ts","pipe.js","filter.js","directive.ts","directive.js","resolver.ts","resolver.js","pp","ex","exs","eex","ls","erl","twig","jl","elm","pure","purs","tpl","styl","re","rei","cmj","merlin","v","vhd","sv","svh","nb","wl","wls","njk","nunjucks","robot","sol","au3","haml","yang","mjml","tf","tf.json","tfvars","tfstate","blade.php","inky.php","applescript","cake","feature","nim","nimble","apib","apiblueprint","tag","vfl","kl","pcss","sss","todo","cfml","cfc","lucee","cfm","cabal","nix","slim","http","rest","rql","restql","kv","graphcool","sbt","reducer.ts","rootReducer.ts","state.ts","actions.ts","effects.ts","cr","drone.yml","cu","cuh","log","def","dot","jst","ejs",".wakatime-project","pde","wpy","hcl","san","djt","red","fxp","prg","pot","po","mo","wat","wasm","ipynb","d","mdx","bal","balx","rkt","bzl","bazel","mint","vm","fhtml","vtl","gd","godot","tres","tscn","azcli","vagrantfile","prisma","cshtml","vbhtml","ad","adoc","asciidoc","edge"]
const fileNamePrefix = 'hello.'

exts.forEach(ext => {
  const currentFileName = `./${fileNamePrefix}${ext}`
  fs.writeFileSync(currentFileName, 'hello world')
})