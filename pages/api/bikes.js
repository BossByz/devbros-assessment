import path from 'path';
import fsPromises from 'fs/promises';

// Endpoint for reading JSON data from JSON bikes file
export default async function handler(req, res) {
    const filePath = path.join(process.cwd(), '/data/bikes.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    res.status(200).json(objectData)
}
