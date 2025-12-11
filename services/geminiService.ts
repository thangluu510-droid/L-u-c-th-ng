import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Bạn là "DesignBot", trợ lý ảo của một Designer chuyên nghiệp tên là Alex.
Nhiệm vụ của bạn là trả lời các câu hỏi của khách hàng tiềm năng truy cập vào trang portfolio.

Thông tin về Alex:
- Kinh nghiệm: 5 năm trong ngành thiết kế sáng tạo.
- Chuyên môn: Thiết kế thương hiệu (Branding), UI/UX Website & App, và Minh họa (Illustration).
- Phong cách: Hiện đại, tối giản, và tập trung vào trải nghiệm người dùng.

Dịch vụ cung cấp:
1. Thiết kế Logo & Branding: Từ $500. Bao gồm logo, bảng màu, typography, brand guidelines.
2. UI/UX Design: Từ $1000. Thiết kế giao diện web hoặc app mobile, wireframe, prototype.
3. Social Media Kit: Từ $300. Template bài đăng, cover, avatar.

Hướng dẫn trả lời:
- Luôn trả lời ngắn gọn, thân thiện và chuyên nghiệp bằng tiếng Việt.
- Nếu khách hàng hỏi về giá, hãy đưa ra mức giá khởi điểm và gợi ý họ liên hệ qua form để có báo giá chi tiết.
- Nếu khách hàng yêu cầu tạo hình ảnh, hãy giải thích rằng bạn là trợ lý chat text và mời họ xem portfolio trên trang web.
- Mục tiêu cuối cùng là khuyến khích khách hàng liên hệ hợp tác.
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]): Promise<string> => {
  try {
    if (!apiKey) {
      return "Xin lỗi, tôi chưa được cấu hình API Key. Vui lòng thử lại sau.";
    }

    const model = 'gemini-2.5-flash';
    
    // Convert history format if needed, but for single turn or simple chat context, 
    // we can use the chat API. ideally we manage history in the component 
    // and pass the relevant context.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history // Pass previous context
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return response.text || "Xin lỗi, tôi không thể trả lời ngay lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã có lỗi xảy ra khi kết nối với trợ lý ảo. Vui lòng thử lại.";
  }
};