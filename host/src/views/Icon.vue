<template>
    <div class="icon">
        <div
            v-for="(categoryIcons, category) in icons"
            :key="category"
            class="category"
        >
            <h6 class="category-name">
                <span><strong>#</strong> {{ category }}</span>
                <span
                    ><strong>{{
                        Object.keys(categoryIcons).length * 2
                    }}</strong>
                    Icons</span
                >
            </h6>
            <div class="icon-parent-box">
                <div
                    v-for="(type, name) in categoryIcons"
                    class="icon-box"
                    :class="{ enable: type.line }"
                    :key="name"
                >
                    <span class="icon-name">{{ name }}</span>
                    <div class="icon-item">
                        <span class="icon-instance">
                            <i :class="`too-${name}`"></i>
                        </span>
                        <span class="icon-unicode">
                            <span class="small">&amp;#X</span>
                            <span>{{
                                type.line.toString(16).toUpperCase()
                            }}</span>
                        </span>
                    </div>
                    <div class="icon-item" v-if="type.fill">
                        <span class="icon-instance">
                            <i :class="`too-${name}`" class="too-fill"></i>
                        </span>
                        <span class="icon-unicode">
                            <span class="small">&amp;#X</span>
                            <span>{{
                                type.fill.toString(16).toUpperCase()
                            }}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icons from 'tooicon/dist/tooIcon.json'
export default {
  data () {
    return {
      icons: Icons
    }
  },
  created () {
    console.log(Icons)
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
