<template>
    <teleport to="body">
        <div
            class="message"
            :style="{
                color: props.textColor,
                width: props.width,
                height: props.height,
                backgroundColor:
                    props.backgroundColor
                        ? props.backgroundColor
                        : currentType[type]
                              .backgroundColor
            }"
        >
            <el-icon
                class="icon"
                :color="currentType[type].color"
                size="25px"
            >
                <component
                    :is="currentType[type].icon"
                ></component>
            </el-icon>
            <el-icon
                class="icon"
                :color="currentType[type].color"
                size="25px"
            ></el-icon>
            {{ props.message }}
        </div>
    </teleport>
</template>

<script lang="ts" setup>
import {
    SuccessFilled,
    CircleCloseFilled,
    WarningFilled
} from '@element-plus/icons-vue';

import { onMounted, defineProps } from 'vue';

const props = defineProps({
    message: {
        type: String,
        default: 'Yang'
    },
    type: {
        type: String,
        default: 'success'
    },
    textColor: {
        type: String,
        default: 'rgba(24, 67, 117,.9)'
    },
    closeMessageBox: {
        type: Function,
        default: () => {}
    },
    closeTimeout: {
        type: Number
    },
    width: {
        type: String,
        default: '20vw'
    },
    height: {
        type: String,
        default: '4vh'
    },
    backgroundColor: {
        type: String
    }
});
const currentType = {
    success: {
        icon: SuccessFilled,
        color: 'rgba(69, 195, 139,.9)',
        backgroundColor: 'rgba(62, 189, 125,0.4)'
    },
    error: {
        icon: CircleCloseFilled,
        color: 'rgba(226, 16, 16,.9)',
        backgroundColor: 'rgba(222, 84, 73,.4)'
    },
    warning: {
        icon: WarningFilled,
        color: 'rgba(218, 192, 123,1)',
        backgroundColor: 'rgba(218, 192, 123,.3)'
    }
};

onMounted(() => {
    //移除消息框
    if (props.closeTimeout) {
        setTimeout(() => {
            props.closeMessageBox();
        }, props.closeTimeout);
    }
});
</script>

<style lang="less" scoped>
.message {
    position: fixed;
    top: 8%;
    left: 50%;
    transform: translate(-50%, 0);
    border: 1px solid rgba(180, 177, 177, 0.26);
    box-shadow: 1px 1px 5px 1px
        rgba(158, 157, 157, 0.692);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: message 1.5s ease;
}
.icon {
    margin-left: -40px;
    margin-right: 40px;
}
@keyframes message {
    0% {
        top: -50%;
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
