function download() {
    const link = document.createElement('a');
    link.href = 'https://example.com/download/file.zip';
    link.download = 'file.zip';
    link.click();
}

document.getElementById('download-button').addEventListener('click', download);