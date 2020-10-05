import { opine, serveStatic } from 'https://deno.land/x/opine@0.23.1/mod.ts';
import { renderFileToString } from "https://deno.land/x/dejs@0.8.0/mod.ts";
import { join, dirname } from 'https://deno.land/x/opine@0.23.1/deps.ts';

const app = opine();
const __dirname = dirname(import.meta.url);

app.engine(".html", renderFileToString);
app.use(serveStatic(join(__dirname, 'build')));
app.set("view engine", "html");

app.get('/', (req, res) => {
  res.render(join(__dirname, 'build','index.html'));
});

app.listen(3000);
console.log('Server running on port - 3000');