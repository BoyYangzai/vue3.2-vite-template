import { createApp } from 'vue';
import Message from './Message.vue';
interface options {
    message: string;
    type?: 'success' | 'error' | 'warning';
    textColor?: string;
    closeTimeout?: number;
    backgroundColor?: string;
    width?: string;
    height?: string;
}
const yangMessage = function (options: options) {
    const mountNode =
        document.createElement('div');
    const messageBox = createApp(Message, {
        ...options,
        closeMessageBox: () => {
            messageBox.unmount();
            mountNode.parentNode?.removeChild(
                mountNode
            );
        }
    });
    messageBox.mount(mountNode);
};
export { yangMessage };
