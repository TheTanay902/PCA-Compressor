document.getElementById("uploadForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("image", event.target.image.files[0]);

    const response = await fetch("/process_image", {
        method: "POST",
        body: formData
    });
    
    const result = await response.blob();
    document.getElementById("result").innerHTML = `<img src="${URL.createObjectURL(result)}" alt="Processed Image">`;
});
