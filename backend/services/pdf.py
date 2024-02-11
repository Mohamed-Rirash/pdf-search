from fastapi import APIRouter, HTTPException, status
import fitz  


async def search_text_in_pdfs(search_text, files):
    results = []
    for file in files:
        contents = await file.read() 
        pdf = fitz.open("pdf", contents) 
        for page in pdf:
            text_instances = page.search_for(search_text)
            if text_instances:
                results.append({
                    "file_name": file.filename,
                    "page_number": page.number + 1,
                    "instances": len(text_instances),
                    "found": True
                })
               # break  
        pdf.close()  

    if not results:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="The text you are searching for is not included in these files."
        )
    return results
