from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

# Serve static files (JavaScript, CSS)
app.mount("/static", StaticFiles(directory="."), name="static")

@app.get("/")
async def read_root():
    return FileResponse("index.html")

# To serve the JavaScript and CSS files directly if they are in the root
@app.get("/script.js")
async def get_script():
    return FileResponse("script.js")

@app.get("/css.js")
async def get_css():
    return FileResponse("css.js")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
