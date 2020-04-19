<template>
    <div id="app" :class="{ dialogOpen: dialog }">
        <div class="container">
            <div class="content">
                <div class="header">
                    <h2>
                        <strong>too</strong>
                        <span>Ico</span>
                        <strong>n</strong>
                        <small>A different pack</small>
                    </h2>
                    <input
                        type="text"
                        :placeholder="`Search ${count} icons`"
                        autocomplete="off"
                        v-model="search"
                    />
                </div>
                <List :icons="icons" @show="show" />
                <div class="footer">
                    <span>
                        <strong>A </strong>
                        <span>different pack</span>
                    </span>
                    <a href="https://github.com/dalirnet/tooicon#readme">
                        <svg
                            viewBox="0 0 2880 1024"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M18.53 10.0301H18.51C18.519 10.0301 18.525 10.0391 18.534 10.0411C18.535 10.0411 18.539 10.0401 18.54 10.0401L18.53 10.0301ZM18.534 10.0411C18.441 10.0421 18.207 10.0901 17.96 10.0901C17.18 10.0901 16.91 9.73007 16.91 9.26007V6.13007H18.5C18.59 6.13007 18.66 6.05007 18.66 5.94007V4.24007C18.66 4.15007 18.58 4.07007 18.5 4.07007H16.91V1.96007C16.91 1.88007 16.86 1.83007 16.77 1.83007H14.61C14.52 1.83007 14.47 1.88007 14.47 1.96007V4.13007C14.47 4.13007 13.38 4.40007 13.31 4.41007C13.23 4.43007 13.18 4.50007 13.18 4.58007V5.94007C13.18 6.05007 13.26 6.13007 13.35 6.13007H14.46V9.41007C14.46 11.8501 16.16 12.1001 17.32 12.1001C17.85 12.1001 18.49 11.9301 18.59 11.8801C18.65 11.8601 18.68 11.7901 18.68 11.7201V10.2201C18.68 10.1211 18.612 10.0551 18.534 10.0411ZM42.23 7.84007C42.23 6.03007 41.5 5.79007 40.73 5.87007C40.13 5.91007 39.65 6.21007 39.65 6.21007V9.73007C39.65 9.73007 40.14 10.0701 40.87 10.0901C41.9 10.1201 42.23 9.75007 42.23 7.84007ZM44.66 7.68007C44.66 11.1101 43.55 12.0901 41.61 12.0901C39.97 12.0901 39.09 11.2601 39.09 11.2601C39.09 11.2601 39.05 11.7201 39 11.7801C38.97 11.8401 38.92 11.8601 38.86 11.8601H37.38C37.28 11.8601 37.19 11.7801 37.19 11.6901L37.21 0.580069C37.21 0.490068 37.29 0.410069 37.38 0.410069H39.51C39.6 0.410069 39.68 0.490068 39.68 0.580069V4.35007C39.68 4.35007 40.5 3.82007 41.7 3.82007L41.69 3.80007C42.89 3.80007 44.66 4.25007 44.66 7.68007ZM35.94 4.07007H35.93H33.84C33.73 4.07007 33.67 4.15007 33.67 4.26007V9.70007C33.67 9.70007 33.12 10.0901 32.37 10.0901C31.62 10.0901 31.4 9.75007 31.4 9.00007V4.25007C31.4 4.16007 31.32 4.08007 31.23 4.08007H29.09C29 4.08007 28.92 4.16007 28.92 4.25007V9.36007C28.92 11.5601 30.15 12.1101 31.84 12.1101C33.23 12.1101 34.36 11.3401 34.36 11.3401C34.36 11.3401 34.41 11.7301 34.44 11.7901C34.46 11.8401 34.53 11.8801 34.6 11.8801H35.94C36.05 11.8801 36.11 11.8001 36.11 11.7101L36.13 4.24007C36.13 4.15007 36.05 4.07007 35.94 4.07007ZM12.24 4.06007H10.11C10.02 4.06007 9.94 4.15007 9.94 4.26007V11.6001C9.94 11.8001 10.07 11.8701 10.24 11.8701H12.16C12.36 11.8701 12.41 11.7801 12.41 11.6001V4.24007V4.23007C12.41 4.14007 12.33 4.06007 12.24 4.06007ZM11.19 0.680069C10.42 0.680069 9.81 1.29007 9.81 2.06007C9.81 2.83007 10.42 3.44007 11.19 3.44007C11.94 3.44007 12.55 2.83007 12.55 2.06007C12.55 1.29007 11.94 0.680069 11.19 0.680069ZM27.68 0.430069H25.57C25.48 0.430069 25.4 0.510069 25.4 0.600069V4.69007H22.09V0.600069C22.09 0.510069 22.01 0.430069 21.92 0.430069H19.79C19.7 0.430069 19.62 0.510069 19.62 0.600069V11.7101C19.62 11.8001 19.71 11.8801 19.79 11.8801H21.92C22.01 11.8801 22.09 11.8001 22.09 11.7101V6.96007H25.4L25.38 11.7101C25.38 11.8001 25.46 11.8801 25.55 11.8801H27.68C27.77 11.8801 27.85 11.8001 27.85 11.7101V0.600069C27.85 0.510069 27.77 0.430069 27.68 0.430069ZM8.81 5.35007V11.0901C8.81 11.1301 8.8 11.2001 8.75 11.2201C8.75 11.2201 7.5 12.1101 5.44 12.1101C2.95 12.1101 0 11.3301 0 6.19007C0 1.05007 2.58 -0.00993021 5.1 6.97893e-05C7.28 6.97893e-05 8.16 0.49007 8.3 0.58007C8.34 0.63007 8.36 0.67007 8.36 0.72007L7.94 2.50007C7.94 2.59007 7.85 2.70007 7.74 2.67007C7.38 2.56007 6.84 2.34007 5.57 2.34007C4.1 2.34007 2.52 2.76007 2.52 6.07007C2.52 9.38007 4.02 9.77007 5.1 9.77007C6.02 9.77007 6.35 9.66007 6.35 9.66007V7.36007H4.88C4.77 7.36007 4.69 7.28007 4.69 7.19007V5.35007C4.69 5.26007 4.77 5.18007 4.88 5.18007H8.62C8.73 5.18007 8.81 5.26007 8.81 5.35007Z"
                                transform="translate(0 128.002) scale(64)"
                                fill="#1B1F23"
                            />
                        </svg>
                    </a>
                    <span>
                        <strong>By </strong>
                        <span>dalirnet@gmail.com</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="dialog">
            <div class="box">
                <h2>
                    <strong>too</strong>
                    <span>Ico</span>
                    <strong>n</strong>
                    <small>A different pack</small>
                </h2>
                <div class="item" v-if="!selectedIcon.status">
                    <p class="title">
                        <strong>- NPM</strong>
                    </p>
                    <p class="caption">
                        <small># Install with terminal</small>
                    </p>
                    <div class="code">
                        <span style="color: #f08d49">npm</span>
                        <span class="space"></span>
                        <span style="color: #f08d49">install</span>
                        <span class="space"></span>
                        <span>tooicon</span>
                        <span class="space"></span>
                        <span style="color: #999;">--save</span>
                    </div>
                    <p class="caption">
                        <small># Import</small>
                    </p>
                    <div class="code">
                        <span style="color: #cc99cd;">import</span>
                        <span class="space"></span>
                        <span style="color: #7ec699;">
                            <span>"tooicon/dist/tooIcon.min.css"</span>
                        </span>
                    </div>
                    <p class="title"><strong>- CDN</strong></p>
                    <p class="caption"><small># unpkg.com</small></p>
                    <div class="code">
                        <span style="color: #ccc;">&lt;</span>
                        <span style="color: #e2777a;">link</span>
                        <span class="space"></span>
                        <span style="color: #e2777a;">href</span>
                        <span style="color: #ccc;">="</span>
                        <span style="color: #7ec699;"
                            >https://unpkg.com/tooicon/dist/tooIcon.min.css</span
                        >
                        <span style="color: #ccc;">"</span>
                        <span class="space"></span>
                        <span style="color: #e2777a;">rel</span>
                        <span style="color: #ccc;">="</span>
                        <span style="color: #7ec699;">stylesheet</span>
                        <span style="color: #ccc;">"&gt;</span>
                    </div>
                    <p class="title"><strong>- Use</strong></p>
                    <p class="caption"><small># line style</small></p>
                    <div class="code">
                        <span style="color: #ccc;">&lt;</span>
                        <span style="color: #e2777a;">i</span>
                        <span class="space"></span>
                        <span style="color: #e2777a;">class</span>
                        <span style="color: #ccc;">="</span>
                        <span style="color: #7ec699;">too-home</span>
                        <span style="color: #ccc;">"&gt;&lt;/</span>
                        <span style="color: #e2777a;">i</span>
                        <span style="color: #ccc;">&gt;</span>
                    </div>
                    <p class="caption"><small># fill style</small></p>
                    <div class="code">
                        <span style="color: #ccc;">&lt;</span>
                        <span style="color: #e2777a;">i</span>
                        <span class="space"></span>
                        <span style="color: #e2777a;">class</span>
                        <span style="color: #ccc;">="</span>
                        <span style="color: #7ec699;">too-home too-fill</span>
                        <span style="color: #ccc;">"&gt;&lt;/</span>
                        <span style="color: #e2777a;">i</span>
                        <span style="color: #ccc;">&gt;</span>
                    </div>
                    <p class="title"><strong>- Contribution</strong></p>
                    <p class="caption">
                        <small
                            ># for report a bug, suggestions or a feature
                            request create a new issue on
                            <a href="https://github.com/dalirnet/tooicon/issues"
                                ><strong>Github</strong></a
                            ></small
                        >
                    </p>
                    <p class="title"><strong>- License</strong></p>
                    <p class="caption">
                        <small
                            ># tooIcon is an open source project and licensed
                            under the <strong>MIT License</strong></small
                        >
                    </p>
                </div>
                <div class="item center" v-if="selectedIcon.status">
                    <div class="demo">
                        <i
                            :class="[
                                `too-${selectedIcon.name}`,
                                { 'too-fill': selectedIcon.fill }
                            ]"
                        ></i>
                    </div>
                    <p
                        class="caption"
                        style="margin-top: -28px;z-index: 1;font-size: 12px;"
                    >
                        <span
                            >&amp;#X{{
                                selectedIcon.unicode.toString(16).toUpperCase()
                            }}</span
                        >
                    </p>
                    <p class="title">
                        <strong>too-{{ selectedIcon.name }}</strong>
                        <template v-if="selectedIcon.fill">
                            <span class="space"> </span>
                            <strong>too-fill</strong>
                        </template>
                    </p>
                    <a class="btn" :href="`https://dalirnet.github.io/tooicon/dist/svg/${this.selectedIcon.fill ? 'fill' : 'line'}/${this.selectedIcon.name}.svg`" :download="`tooicon-${this.selectedIcon.fill ? 'fill' : 'line'}-${this.selectedIcon.name}.svg`">
                        <span>download</span>
                        <span class="space"> </span>
                        <strong>SVG</strong>
                    </a>
                </div>
            </div>
            <span class="toggle" @click="toogle">
                <i class="too-arrow-right too-fill"></i>
            </span>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import tooIcon from 'tooicon/dist/tooIcon.json'
import List from '@/views/List.vue'
export default {
  components: {
    List
  },
  data () {
    return {
      count: _.sum(_.map(tooIcon, items => _.size(items))) * 2,
      search: '',
      dialog: false,
      selectedIcon: {
        status: false,
        name: '',
        unicode: '',
        fill: false
      }
    }
  },
  computed: {
    icons () {
      const icons = {}
      _.forEach(tooIcon, (category, categoryKey) => {
        icons[categoryKey] = {}
        _.forEach(category, (icon, iconKey) => {
          if (_.isEmpty(this.search)) {
            icons[categoryKey][iconKey] = icon
          } else if (
            _.includes(
              _.lowerCase(categoryKey),
              _.lowerCase(this.search)
            ) ||
                        _.includes(iconKey, _.lowerCase(this.search))
          ) {
            icons[categoryKey][iconKey] = icon
          }
        })
      })
      return icons
    }
  },
  methods: {
    toogle () {
      if (!this.dialog) {
        this.selectedIcon.status = false
      }
      this.dialog = !this.dialog
    },
    show (name, unicode, type) {
      this.dialog = true
      this.selectedIcon = {
        status: true,
        unicode,
        name,
        fill: type === 'fill'
      }
    }
  }
}
</script>
<style lang="scss">
.space {
    margin: 0 3px;
}

.container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 15px;
    transition: transform 0.4s ease;
    transform-origin: top right;

    .content {
        max-width: 1100px;
        display: flex;
        flex: 1;
        justify-content: space-around;
        flex-direction: column;

        > div {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 5px 0;

            &.header {
                border-bottom: 1px solid #e7e7e7;

                input {
                    position: relative;
                    bottom: 2px;
                    padding: 4px 10px 3px 10px;
                }
            }

            &.footer {
                border-top: 1px solid #e7e7e7;
                align-items: baseline;
                padding-top: 24px;
                font-size: 12px;

                svg {
                    height: 18px;
                }
            }
        }
    }
}

.dialog {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 590px;
    max-width: 80%;
    background: #f4f8fc;
    transform: translateX(-100%);
    box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0);
    transition: box-shadow 0.4s ease, transform 0.3s ease;

    &::after {
        content: '';
        position: absolute;
        width: 28px;
        bottom: -10%;
        top: -10%;
        right: -14px;
        background: #f4f8fc;
        border-radius: 50%;
    }

    .code {
        font-size: 14px;
        background: #3f3d56;
        color: #fff;
        padding: 7px 10px;
        border-radius: 4px;
        word-break: break-all;
    }

    .title {
        margin-top: 20px;
        padding: 0 5px;
    }

    .caption {
        padding: 0 5px;

        .small {
            display: inline-block;
            transform: scale(0.8);
        }
    }

    .btn {
        margin: 20px 10px;
        padding: 5px 10px 4px 10px;
        border-radius: 8px;
        background: #3f3d56;
        color: #fff;
        cursor: pointer;
    }

    .box {
        position: absolute;
        display: flex;
        top: 16px;
        left: 16px;
        bottom: 16px;
        right: 8px;
        padding: 0 24px;
        box-sizing: border-box;
        border-left: solid 2px #fff;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h2 {
            padding-top: 50px;
        }

        .item {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            flex: 1;
            padding-bottom: 60px;
            overflow-y: auto;

            &.center {
                align-items: center;
            }
        }
    }

    .demo {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 240px;
        height: 240px;
        margin-top: 48px;
        background-image: linear-gradient(45deg, #fff 25%, transparent 25%),
            linear-gradient(-45deg, #fff 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #fff 75%),
            linear-gradient(-45deg, transparent 75%, #fff 75%);
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;

        i {
            font-size: 120px;
        }
    }

    .toggle {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: -68px;
        bottom: 14px;
        width: 48px;
        height: 48px;
        background: #fff;
        text-align: center;
        box-sizing: border-box;
        border-radius: 50%;
        box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.05);
        transition: all 0.4s 0.4s ease;
        line-height: 0;
        cursor: pointer;
    }
}

.dialogOpen {
    .container {
        transform: scale(0.95);
    }
    .dialog {
        transform: translateX(0);
        box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.3);

        .toggle {
            transform: rotate(180deg);
        }
    }
}
</style>
