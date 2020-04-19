<template>
    <div class="icon">
        <div
            v-for="(category, categoryKey) in icons"
            :key="categoryKey"
            class="category"
        >
            <template v-if="Object.keys(category).length">
                <h6 class="category-name">
                    <span><strong>#</strong> {{ categoryKey }}</span>
                    <span
                        ><strong>{{ Object.keys(category).length * 2 }}</strong>
                        Icons</span
                    >
                </h6>
                <div class="icon-parent-box">
                    <div
                        v-for="(icon, iconKey) in category"
                        class="icon-box"
                        :class="{ enable: icon.line || icon.fill }"
                        :key="iconKey"
                    >
                        <span class="icon-name">{{ iconKey }}</span>
                        <div class="icon-item" v-if="icon.line">
                            <span class="icon-instance">
                                <i :class="`too-${iconKey}`"></i>
                            </span>
                            <span class="icon-unicode">
                                <span class="small">&amp;#X</span>
                                <span>{{
                                    icon.line.toString(16).toUpperCase()
                                }}</span>
                            </span>
                        </div>
                        <div class="icon-item" v-if="icon.fill">
                            <span class="icon-instance">
                                <i
                                    :class="`too-${iconKey}`"
                                    class="too-fill"
                                ></i>
                            </span>
                            <span class="icon-unicode">
                                <span class="small">&amp;#X</span>
                                <span>{{
                                    icon.fill.toString(16).toUpperCase()
                                }}</span>
                            </span>
                        </div>
                        <div class="icon-item" v-if="!icon.line && !icon.fill">
                            <span class="icon-instance"></span>
                            <span class="icon-unicode">
                                <strong>too</strong>
                                <span>Ico</span>
                                <strong>n</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    icons: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.icon {
    display: block !important;

    .category {
        display: block;

        .category-name {
            display: flex;
            justify-content: space-between;
            padding: 8px 8px 0;
        }
    }

    .icon-parent-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 -8px 16px -8px;
    }

    .icon-box {
        position: relative;
        display: flex;
        flex: 1;
        background: #efefef;
        padding: 30px 8px 8px 8px;
        margin: 8px;
        border-radius: 8px;
        cursor: progress;

        &.enable {
            cursor: default;
            background: #ffffff;

            .icon-name {
                cursor: pointer;
            }

            .icon-item {
                cursor: pointer;
                &:hover {
                    background: #f4f8fc;

                    .icon-unicode {
                        background: #fff;
                    }

                    .icon-instance {
                        transform: translateY(2px);
                    }
                }
            }
        }

        .icon-name {
            position: absolute;
            font-size: 12px;
            top: 8px;
            left: 8px;
            background: #f5b971;
            color: #fff;
            border-radius: 4px;
            padding: 2px 4px 1px;
            line-height: 12px;
            max-width: 70%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            user-select: all;
        }
    }

    .icon-item {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2px;
        padding: 6px;
        border-radius: 4px;
        transition: background 0.3s ease;

        .icon-unicode {
            font-size: 12px;
            border-radius: 4px;
            background: #f7f7f7;
            border-radius: 4px;
            padding: 2px 4px;
            line-height: 12px;
            transition: background 0.3s ease;
            user-select: all;

            .small {
                display: inline-block;
                transform: scale(0.8);
            }
        }

        .icon-instance {
            font-size: 24px;
            padding: 8px;
            min-width: 40px;
            text-align: center;
            transform-origin: center;
            transition: transform 0.5s ease;
        }
    }
}
</style>
