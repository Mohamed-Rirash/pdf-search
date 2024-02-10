from typing import Annotated, List
from fastapi import APIRouter, status, File, UploadFile, Form, HTTPException
from fastapi.responses import JSONResponse
from backend.services.pdf import search_text_in_pdfs

router = APIRouter(
    prefix="/api/service",
    tags=["upload"]
)

@router.post('/search-text', status_code=status.HTTP_202_ACCEPTED, response_class=JSONResponse)
async def upload_and_search(
    search_text: Annotated[str, Form(...)],
    files: List[UploadFile] = File(...)
) -> JSONResponse:
    """
    Accepts multiple PDF files and a search text, searches for the text within the PDFs,
    and returns the search results in a JSON response.
    """
    try:
        if not files:
            raise HTTPException(status_code=status.HTTP_204_NO_CONTENT, detail="Please upload the PDF files.")
        data = await search_text_in_pdfs(files=files, search_text=search_text)
        return JSONResponse(content={"result": data})
    except HTTPException as e:
        # In case of an exception, you might want to handle it differently
        # For now, re-raise the exception
        raise e
