import { reactive } from "vue";

export const store = reactive({
    getImagePath(imgPath) {
        return new URL('./assets/img/' + imgPath, import.meta.url).href;
    }
})