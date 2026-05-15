const apiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || '';
export async function sendChatMessage(message) {
    const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });
    const data = (await response.json());
    if (!response.ok) {
        throw new Error(data.error || 'Ошибка сервера');
    }
    return data;
}
