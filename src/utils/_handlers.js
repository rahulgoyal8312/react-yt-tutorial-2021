export function handleInputChange(e, cb) {
    const target = e.target;
    let { name, value, files, type } = target;

    if (files) {
        let { files } = e.target;
        value = {
            blob: window.URL.createObjectURL(files[0]),
            binary: files[0],
            info: files[0] ? files[0].name : ""
        }
    }

    let payload = {
        name,
        value,
        type
    }
    if (type === "checkbox") {
        payload.checked = e.target.checked
    }

    cb(payload)
}