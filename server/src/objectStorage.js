// Mock object storage service
class ObjectStorageService {
  async getObjectEntityUploadURL(entity, entityId, filename) {
    const objectPath = `public/${entity}/${entityId}/${Date.now()}-${filename}`;
    const uploadUrl = `https://example.com/mock-upload/${encodeURIComponent(objectPath)}`;
    return { uploadUrl, objectPath };
  }
}
module.exports = new ObjectStorageService();
