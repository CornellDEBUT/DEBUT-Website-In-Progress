"""Static file server for local preview.

Serves the project root on the port given by the PORT environment variable,
so the preview manager can assign a free port instead of a hardcoded one.
Run directly for a manual preview:  python .claude/serve.py

Uses ThreadingHTTPServer (same as "python -m http.server") so the browser's
parallel requests for CSS, JS and images don't queue behind one another.
"""
import functools
import http.server
import os

PORT = int(os.environ.get("PORT") or 8137)
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
http.server.ThreadingHTTPServer.allow_reuse_address = True

with http.server.ThreadingHTTPServer(("", PORT), handler) as httpd:
    print("serving %s at http://localhost:%d" % (ROOT, PORT), flush=True)
    httpd.serve_forever()
