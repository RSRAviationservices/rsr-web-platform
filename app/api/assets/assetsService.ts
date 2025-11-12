import axios from 'axios';
import { AssetContext, UploadResponse, DeleteResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/v1';

// Create axios instance without credentials for public uploads
const assetsClient = axios.create({
  baseURL: API_BASE_URL,
});

export const assetsService = {
  /**
   * Upload single document (resume) - Public endpoint
   */
  async uploadDocument(
    file: File,
    context: AssetContext = AssetContext.RESUMES
  ): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await assetsClient.post<UploadResponse>(
      `/assets/upload/document/${context}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data.data.url!;
  },

  /**
   * Upload multiple documents
   */
  async uploadDocuments(
    files: File[],
    context: AssetContext = AssetContext.RESUMES,
    contextId?: string
  ): Promise<string[]> {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));

    const endpoint = contextId
      ? `/assets/upload/documents/${context}/${contextId}`
      : `/assets/upload/documents/${context}`;

    const response = await assetsClient.post<UploadResponse>(
      endpoint,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data.data.urls!;
  },

  /**
   * Delete single file
   */
  async deleteFile(fileUrl: string): Promise<void> {
    await assetsClient.delete<DeleteResponse>('/assets/delete', {
      data: { fileUrl },
    });
  },

  /**
   * Delete multiple files
   */
  async deleteMultipleFiles(fileUrls: string[]): Promise<void> {
    await assetsClient.delete<DeleteResponse>('/assets/delete-multiple', {
      data: { fileUrls },
    });
  },
};
