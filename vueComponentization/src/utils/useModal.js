import { ref } from 'vue'
export function useModal(container)
{
    const visible = ref(true);
    return {visible}
}