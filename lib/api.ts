export const sendMessage = async (data: any) => {
    await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }).then((res: Response) => {
        if (!res.ok)
            throw new Error("Failed to send message");
        return res.json();
    })
}