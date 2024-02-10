from fastapi import FastAPI
from backend.api import pdfreader
from fastapi.responses import JSONResponse

app = FastAPI()

app.include_router(pdfreader.router)

@app.get('/', response_class=JSONResponse)
async def root():
    return {"message": "Welcome to the PDF Reader API!"}
