from fastapi import FastAPI
from backend.api import pdfreader
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "https://pdf-search-coral.vercel.app/",
    "pdf-search-coral.vercel.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)


app.include_router(pdfreader.router)

@app.get('/', response_class=JSONResponse)
async def root():
    return {"message": "Welcome to the PDF Reader API!"}
