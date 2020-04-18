<template>
    <div id="app">
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
                    />
                </div>
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import Icons from 'tooicon/dist/tooIcon.json'
export default {
  data () {
    return {
      count: _.sum(_.map(Icons, items => _.size(items))) * 2
    }
  }
}
</script>
<style lang="scss">
@import '~tooicon/dist/tooIcon.min.css';
@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai+2:400,600&display=swap');

body,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
    font-weight: 400;
}

body {
    background: #f4f8fc;
    line-height: 28px;
    scroll-behavior: smooth;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

body,
input {
    font-family: 'Baloo Bhai 2', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    color: #222831;
}

input {
    border: none;
    border-radius: 8px;
    padding: 2px 10px 1px 10px;
}

::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px 15px;

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

                h2 small {
                    font-size: 12px;
                    margin: 0 5px;
                }
            }
        }
    }
}
</style>
