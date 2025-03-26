import { client } from '../../telebot/startBot';

export const sendMessage = async (to: string, message: string): Promise<Object> => {
    const result = await client.sendMessage(to as string, { message: message as string });
    return result;
};