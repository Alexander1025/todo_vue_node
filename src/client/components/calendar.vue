<template>
    <div class="calendar">
        <ul class="calendartop acrossflex">
            <li class="orange">日</li>
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li class="orange">六</li>
        </ul>
        <div class="calendarmain acrossflex">
            <div>
                <div class="calendarlist">01</div>
            </div>
            <div>
                <div class="calendarlist">02</div>
            </div>
            <div>
                <div class="calendarlist">03</div>
            </div>
            <div>
                <div class="calendarlist">04</div>
            </div>
            <div>
                <div class="calendarthis calendarlist">05</div>
            </div>
            <div>
                <div class="calendarlist">06</div>
            </div>
            <div>
                <div class="calendarlist">07</div>
            </div>
            <div>
                <div class="calendarlist">08</div>
            </div>
            <div>
                <div class="calendarlist">09</div>
            </div>
            <div>
                <div class="calendarlist">10</div>
            </div>
            <div>
                <div class="calendarlist">11</div>
            </div>
            <div>
                <div class="calendarlist">12</div>
            </div>
            <div>
                <div class="calendarlist">13</div>
            </div>
            <div>
                <div class="calendarlist">14</div>
            </div>
            <div>
                <div class="calendarlist">15</div>
            </div>
            <div>
                <div class="calendarlist">16</div>
            </div>
            <div>
                <div class="calendarlist">17</div>
            </div>
            <div>
                <div class="calendarlist">18</div>
            </div>
            <div>
                <div class="calendarlist">19</div>
            </div>
            <div>
                <div class="calendarlist">20</div>
            </div>
            <div>
                <div class="calendarlist">21</div>
            </div>
            <div>
                <div class="calendarlist">22</div>
            </div>
            <div>
                <div class="calendarlist">23</div>
            </div>
            <div>
                <div class="calendarlist">24</div>
            </div>
            <div>
                <div class="calendarlist">25</div>
            </div>
            <div>
                <div class="calendarlist">26</div>
            </div>
            <div>
                <div class="calendarlist">27</div>
            </div>
            <div>
                <div class="calendarlist">28</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            datelist:[
                {
                    id:1,
                    // 日期
                    month:7,
                    date:24,
                    day:2,

                    // 是否当天
                    istoday: false,

                    // 任务信息
                    havetask: false,

                    // 节日
                    holiday:"",
                    // 节气
                    solarterm:"",
                }
            ],
        }
    },
    methods:{

    },
    mounted:function(){
        var date = new Date();
        console.log(date);
        console.log(date.getFullYear());
        console.log(date.getMonth()+1);
        console.log(date.getDate());
        console.log(date.getDay());


        console.log("=======");
        console.log("=======");

        var date2 = new Date();
        // console.log(date2.setDate(1));
        // console.log(date2.setTime(date2.getTime()-86400000));

        date2.setDate(1);


        console.log(date2);
        console.log(date2.getFullYear());
        console.log(date2.getMonth()+1);
        console.log(date2.getDate());
        console.log(date2.getDay());




        console.log("=======");
        console.log("=======");






        date2.setTime(date2.getTime()-86400000);
        console.log(date2);
        console.log(date2.getFullYear());
        console.log(date2.getMonth()+1);
        console.log(date2.getDate());
        console.log(date2.getDay());

    }
}
</script>
<style>
    .acrossflex{
        display: flex;
        flex-flow:row nowrap;
        align-items: center;
        justify-content: space-around;
    }












    .calendar{

    }
    .calendar ul, .calendar li{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .orange{
        color: #e6b85c;
    }
    .calendartop{
        background-color: #F5F6F8;
        line-height: 30px;
        font-size: 14px;
        color: #a5a9b1;
    }
    .calendarmain{
        flex-wrap: wrap;
    }
    .calendarmain > div{
        width: 14.28%;
        text-align: center;
        padding: 4px 0;
    }
    .calendarlist{
        font-size: 14px;
        width: 9vw;
        height: 9vw;
        line-height: 9vw;
        margin: auto;
        border-radius: 50%;

    }
    .calendarthis{
        background-color: #617FDF;
        color: white;
    }
</style>

