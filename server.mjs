import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
const root = process.cwd();
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
createServer(async (req,res)=>{const path = req.url === '/' ? '/index.html' : req.url; try {const body=await readFile(join(root,path)); res.writeHead(200,{'Content-Type':types[extname(path)]||'text/plain'}); res.end(body)} catch {res.writeHead(404);res.end('Not found')}}).listen(4174, '127.0.0.1', ()=>console.log('VELLO preview http://127.0.0.1:4174'));
