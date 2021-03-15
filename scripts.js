var curDate = new Date()

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Set", "Oct", "Nov", "Dec"]
var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

var week_inc = curDate.getDay()
var day_inc = curDate.getDate()
var month_inc = curDate.getMonth()

var w_code = ""
var d_code = ""
var s_code = ""
var ss_code = ""

week_inc += 6
day_inc += 7

$(document).ready(function(){
    $("#previous").click(function(){
        $("#dayofweek").html("")
        $("#eachday").html("")
        $("#calendar_content").html("")
        
        week_inc -= 6
        week_inc += 7

        if(day_inc > 12) day_inc -= 12
        else{
            month_inc--
            if(month_inc < 0) month_inc = 11
            day_inc = monthDays[month_inc] - (12-day_inc)
        } 

        for(let i = week_inc-6; i < week_inc; i++){
            w_code += "<div>" + days[i%7] + "</div>"
            if(day_inc > monthDays[month_inc]){
                day_inc = 1
                month_inc++
                if(month_inc > 11) month_inc = 0
            }
            d_code += "<div>" + months[month_inc] + " " + day_inc++ + "</div>"

            var schedule = Math.floor(Math.random() * 2)

            var time = Math.floor(Math.random() * 6) + 1
            var minute = Math.floor(Math.random() * 60) + 1
            var interval_h = Math.floor(Math.random() * 3) + 1
            var interval_min = Math.floor(Math.random() * 3)*5 + 1
            
            for(let j = 0; j < 4; j++){
                if(schedule == 0){
                    ss_code += "<div class='active'>" + time + ":" + minute + "</div>"
                    time += interval_h
                    minute += interval_min
                    if(minute > 60) minute = 0
                }else{
                    ss_code += "<div>-</div>"
                }
            }
            s_code += "<div>" + ss_code + "</div>"
            ss_code = ""
        }

        $("#dayofweek").html(w_code)
        $("#eachday").html(d_code)
        $("#calendar_content").html(s_code)
        w_code = ""
        d_code = ""
        s_code = ""
    })

    $("#next").click(function(){
        $("#dayofweek").html("")
        $("#eachday").html("")
        $("#calendar_content").html("")
        
        week_inc += 6
        for(let i = week_inc-6; i < week_inc; i++){
            w_code += "<div>" + days[i%7] + "</div>"
            if(day_inc > monthDays[month_inc]){
                day_inc = 1
                month_inc++
                if(month_inc > 11) month_inc = 0
            }
            d_code += "<div>" + months[month_inc] + " " + day_inc++ + "</div>"

            var schedule = Math.floor(Math.random() * 2)

            var time = Math.floor(Math.random() * 6) + 1
            var minute = Math.floor(Math.random() * 60) + 1
            var interval_h = Math.floor(Math.random() * 3) + 1
            var interval_min = Math.floor(Math.random() * 3)*5 + 1
            
            for(let j = 0; j < 4; j++){
                if(schedule == 0){
                    ss_code += "<div class='active'>" + time + ":" + minute + "</div>"
                    time += interval_h
                    minute += interval_min
                    if(minute > 60) minute = 0
                }else{
                    ss_code += "<div>-</div>"
                }
            }
            s_code += "<div>" + ss_code + "</div>"
            ss_code = ""
        }

        $("#dayofweek").html(w_code)
        $("#eachday").html(d_code)
        $("#calendar_content").html(s_code)
        w_code = ""
        d_code = ""
        s_code = ""
    })
})

function init(){
    $("#dayofweek").html("")
    $("#eachday").html("")
    $("#calendar_content").html("")
    
    // week_inc += 6
    day_inc -= 7
    for(let i = week_inc-6; i < week_inc; i++){
        w_code += "<div>" + days[i%7] + "</div>"
        if(day_inc > monthDays[month_inc]){
            day_inc = 1
            month_inc++
            if(month_inc > 11) month_inc = 0
        }
        d_code += "<div>" + months[month_inc] + " " + day_inc++ + "</div>"

        var schedule = Math.floor(Math.random() * 2)

        var time = Math.floor(Math.random() * 6) + 1
        var minute = Math.floor(Math.random() * 60) + 1
        var interval_h = Math.floor(Math.random() * 3) + 1
        var interval_min = Math.floor(Math.random() * 3)*5 + 1
        
        for(let j = 0; j < 4; j++){
            if(schedule == 0){
                ss_code += "<div class='active'>" + time + ":" + minute + "</div>"
                time += interval_h
                minute += interval_min
                if(minute > 60) minute = 0
            }else{
                ss_code += "<div>-</div>"
            }
        }
        s_code += "<div>" + ss_code + "</div>"
        ss_code = ""
    }

    $("#dayofweek").html(w_code)
    $("#eachday").html(d_code)
    $("#calendar_content").html(s_code)
    w_code = ""
    d_code = ""
    s_code = ""
}