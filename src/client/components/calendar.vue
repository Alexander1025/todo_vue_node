<template>
    <div class="calendar" ref="calendar">
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
            <div v-for="(item, index) in datelist">
                <div class="calendarlist" :class="[item.istoday ? 'calendarthisday' : '', item.isthismonth ? '' : 'calendarthismonth']">{{item.date}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            onedaytime:86400000,
            datelist:[
                // {
                //     id:1,

                //     // 日期
                //     month:7,
                //     date:24,
                //     day:2,

                //     // 是否当天
                //     istoday: false,
                //     // 是否当月
                //     isthismonth: false,

                //     // 任务信息
                //     havetask: false,

                //     // 节日
                //     holiday:"",
                //     // 节气
                //     solarterm:"",
                // },
            ],
            idnowlog:0,
            nowdate: new Date(this.$store.state.setnowdate),
        }
    },
    methods:{

    },
    mounted:function(){




        // console.log("=======");
        // console.log("现在");


        // 现在
        var date = new Date(this.nowdate);


        // console.log(date);
        // console.log(date.getFullYear());
        // console.log(date.getMonth()+1);
        // console.log(date.getDate());
        // console.log(date.getDay());





        // console.log("=======");
        // console.log("本月1号");


        // 本月1号
        var date2 = new Date(this.nowdate);
        // console.log(date2.setDate(1));
        // console.log(date2.setTime(date2.getTime()-86400000));

        date2.setDate(1);


        // console.log(date2);
        // console.log(date2.getFullYear());
        // console.log(date2.getMonth()+1);
        // console.log(date2.getDate());
        // console.log(date2.getDay());




        // console.log("=======");
        // console.log("上月最后一天");


        // 上月最后一天

        var date3 = new Date(this.nowdate);
        date3.setDate(1);
        date3.setTime(date3.getTime()-(this.onedaytime*1));


        // console.log(date3);
        // console.log(date3.getFullYear());
        // console.log(date3.getMonth()+1);
        // console.log(date3.getDate());
        // console.log(date3.getDay());




        // console.log("=======");
        // console.log("补上上月天数");

        // 补上上月日期天数
        var date4 = new Date(this.nowdate);
        date4.setDate(1);
        date4.setTime(date4.getTime()-(this.onedaytime*1));
        // 上月最后一天的日期数
        var lastday = date4.getDate();

        // console.log(lastday);
        // console.log(lastday.getFullYear());
        // console.log(lastday.getMonth()+1);
        // console.log(lastday.getDate());
        // console.log(lastday.getDay());

        // 如果不是星期六就补上上个月的日数
        if(date4.getDay() !== 0){
        // if(date4.getDay() !== 6){
            for(let i = 0 ; i <= date4.getDay() ; i++){
                var date5 = new Date(date4);

                // 设置日期天数，本月最后一天日期数 - 本月最后一天星期数 = 显示在日历中第一个上月的日期数
                date5.setDate(lastday - date4.getDay() + i);


                // console.log(i+1);
                // console.log(date5);
                // console.log(date5.getFullYear());
                // console.log(date5.getMonth()+1);
                // console.log(date5.getDate());
                // console.log(date5.getDay());


                this.idnowlog = i+1;
                var calendardetail = {
                    id: i+1,
                    month: date5.getMonth()+1,
                    date: date5.getDate(),
                    day: date5.getDay(),
                    istoday: false,
                    isthismonth: false,
                    havetask: false,
                    holiday:"",
                    solarterm:"",
                };

                this.datelist.push(calendardetail);
            }
        }


        // console.log("=======");
        // console.log("本月天数");

        // 现在
        var date6 = new Date(this.nowdate);
        date6.setDate(1);
        if(date6.getMonth()+1 >= 12){
            date6.setMonth(0);
            date6.setFullYear(date6.getFullYear()+1);
        }else{
            // 增加一个月
            date6.setMonth(date6.getMonth()+1);
        }
        date6.setTime(date6.getTime()-(this.onedaytime*1));


        // console.log(date6);
        // console.log(date6.getFullYear());
        // console.log(date6.getMonth()+1);
        // console.log(date6.getDate());
        // console.log(date6.getDay());

        // 生成本月天数
        var now = new Date(this.nowdate);
        for(let i = 0 ; i <= date6.getDate()-1 ; i++){
            // console.log(i);
            // this.idnowlog = i+1;
            var date7 = new Date(this.nowdate);
            date7.setDate(i+1);
            this.idnowlog = this.idnowlog+i+1;
            var calendardetail = {
                id: this.idnowlog,
                month: date7.getMonth()+1,
                date: date7.getDate(),
                day: date7.getDay(),
                istoday: false,
                isthismonth: true,
                havetask: false,
                holiday:"",
                solarterm:"",
            };
            if(now.getDate() == date7.getDate()){
                calendardetail['istoday'] = true;
            }
            this.datelist.push(calendardetail);
        }





        // 补上下月日期天数
        date6.setTime(date6.getTime()+(this.onedaytime*1));

        // console.log("date6"+date6);
        // console.log("getFullYear"+date6.getFullYear());
        // console.log("getMonth"+date6.getMonth()+1);
        // console.log("getDate"+date6.getDate());
        // console.log("getDay"+date6.getDay());


        for(let i = 0 ; i <= (7 - date6.getDay())-1 ; i++){
            var date7 = new Date(this.nowdate);
            date7.setDate(i+1);
            this.idnowlog = this.idnowlog+i+1;
            var calendardetail = {
                id: this.idnowlog,
                month: date7.getMonth()+1,
                date: date7.getDate(),
                day: date7.getDay(),
                istoday: false,
                isthismonth: false,
                havetask: false,
                holiday:"",
                solarterm:"",
            };

            this.datelist.push(calendardetail);
        }
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
        position: fixed;
        top: 50px;
        left: 0;
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
        background-color: rgba(255, 255, 255, 0.5);
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
    .calendarthisday{
        background-color: #617FDF;
        color: white;
    }
    .calendarthismonth{
        color: #bdbdbd;
    }
</style>

