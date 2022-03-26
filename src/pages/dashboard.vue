<template>
    <div id="container">
        <div class="my_courses_column">
            <div class="my_courses_column_name">Мои курсы</div>
            <div class="my_courses">
                <div class="nocourses" v-if="nocourses==true" >
                    <p>You haven't created any courses yet.</p>
                    <button class="btn_create_course">Create a course</button>
                </div>
                <div class="courses" v-if="nocourses==false" >
                    <div>Курс1</div>
                    <div>Курс2</div>
                </div>
            </div>
        </div>
        <div class="coursePanel1" v-if="current!=''">
            <div class="settings_for_course1">
                <div class="count_pupils">
                    Number of students: <strong>55</strong>
                </div>
                <div class="count_active_pupils">
                    Number of active students: <strong>20</strong>
                </div>
                <div class="count_ended_pupils">
                    Students who completed the course: <strong>5</strong>
                </div>
                <div class="count_ended_pupils">
                    Average rating: <strong>4.3</strong>
                </div>
                <div class="activity_table">
                    <div class="activity_name">
                        Activity
                    </div>
                    <div class="activity-info">
                        <div class="info-tag">
                            Student Петя passed the lesson 3231 
                        </div>
                        <div class="info-tag">
                            Student Ваня passed the lesson 111 
                        </div>
                        <div class="info-tag">
                            Student Витя has ended your course
                        </div>
                    </div>
                </div>
            </div>
            <div class="Pupils">
                <h2 class="pupils_heading">Students</h2>
                <table cellspacing="7" cols="4" align="center">
                    <tr class="info_about_student">
                        <td class="between_columns">Name</td>
                        <td class="center_of_column between_columns">Telephone-number</td>
                        <td class="center_of_column between_columns">Average rating</td>
                        <td>More info</td>
                    </tr>
                    <tr class="info_about_student">
                        <td class="name">Иван</td>
                        <td class="center_of_column">+799999</td>
                        <td class="mark">4.7</td>
                        <td><a class="open_stats_of_student" href="#" @click="take_pupil_info('Иван')">Open Stats</a></td>
                    </tr>
                    <tr class="info_about_student">
                        <td class="name">Петя</td>
                        <td class="center_of_column">+788888</td>
                        <td class="mark">4.8</td>
                        <td><a class="open_stats_of_student" href="#" @click="take_pupil_info('Петя')">Open Stats</a></td>
                    </tr>
                    <tr class="info_about_student">
                        <td class="name">Вася</td>
                        <td class="center_of_column">+777777</td>
                        <td class="center_of_column">4.3</td>
                        <td><a class="open_stats_of_student" href="#" @click="take_pupil_info('Вася')">Open Stats</a></td>
                    </tr>
                </table>
                <h4 class="pupils_heading" id='pupils_heading' style="margin-top: 10px; display: none;" >Student statistics:<strong style="margin-left: 5px;">{{ name_of_pupil }}</strong></h4>
                <table class="pupils_info" id='pupils_info' cellspacing="7" cols="2" align="center" style="display: none;">
                    <tr>
                        <td>Lesson</td>
                        <td>Mark</td>
                    </tr>
                    <tr>
                        <td>JADERNAQA physics</td>
                        <td class="mark">4.6</td>
                    </tr>
                    <tr>
                        <td>MOLEKULARNIQA physics</td>
                        <td class="mark">4.8</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Dashboard',
    components: {},
    data () { 
        return {
            nocourses: true,
            current: 'lel',
            title: 'тут название курса',
            name_of_pupil: "Иван"
        }
    },
    methods: {
        changeCourse(course){
            alert(course)
        },
        take_pupil_info(name){
            this.name_of_pupil = name
            document.getElementById('pupils_heading').style.display = ''
            document.getElementById('pupils_info').style.display = ''
        }
    },
}

</script>

<style lang="css">
    .between_columns {
        margin-right: 15px;
    }

    .info_about_student {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .open_stats_of_student {
        font-size: 19px;
    }

    .pupils_info {
        font-size: 18px;
    }

    .center_of_column {
        display: flex;
        justify-content: center;
    }

    .activity_name{
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #FFFFFF;
        padding: 7px 0 7px 0;
        justify-content: center;  
        background: #4E1695;
        border-radius: 20px 20px 0px 0px;
    }

    .activity-info {
        padding: 15px 0 30px 13px;
    }

    .activity_table {
        margin: 60px 0 0 0; 
        min-width: 400px;
        min-height: 300px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

    .Pupils {
        margin: 0 0 0 250px;
    }
    
    .info-board {
        margin: 0 auto;
    }

    .pupils_heading {
        margin: 0;
        display: flex;
        justify-content: center;
    }

    .btn_create_course {
        margin: 10px 0 0 0;
        background: #FFFFFF;
        border: 2px solid #4E1695;
        border-radius: 5px;
        color: #4E1695;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        padding: 5px;
    }

    .my_courses{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 754px;
    }

    .my_courses_column_name {
        padding: 14px 0;
        display: flex;
        justify-content: center;
        font-size: 18px;
        line-height: 24px;
        background: rgba(0, 0, 0, 0.6);
    }

    .my_courses_column{
        flex: 0 1 25%;
        background: #4E1695;
        box-shadow: 5px 0px 14px rgba(0, 0, 0, 0.25);
        height: 806px;
        color: #fff;
        height: 100vh;
    }

    .nocourses {
        font-size: 14px;
    }

    body {
        background-color: rgba(239, 234, 242);
    }

    .poster {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 15px 0 0;
    }

    .poster-text{
        margin: 15px 0;
        font-weight: bold;
        font-size: 15px;
        color: #666666;
    }

    .upload_poster{
        padding: 100px 0 50px 0;
        min-height: 231px;
        width: 138px;
        background: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }


    .btn-dashboard {
        border: 2px solid #000000;
        box-sizing: border-box;
        border-radius: 11px;
        padding: 0 25px 0 25px;
        font-weight: bold;
        margin: 26px 0 0 0;
    }

    .coursePanel1 p{
        font-size: 24px;
    }

    .type_of_course, .price_of_course{
        padding: 0 10px 0 10px;
        font-size: 24px;
        background: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

    .name_of_course {
        padding: 0 10px 0 10px;
        background: #FFFFFF;
        box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        min-width: 752px;
        min-height: 54px;
        font-size: 24px;
    }

    .img {
        width: 100px;
        height: 100px;
    }

    .course_description{
        background: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        padding: 5px 10px 0 10px;
    }

    .desription_poster{
        display: flex;
    }

    .course_description{
        height: 285px;
        width: 548px;
    }

    .add_poster{
        width: 138px;
        height: 231px;
    }

    p{
        margin: 0;
    }

    .type_price p{
        padding: 0 15px;
    }

    .type_price{
        display: flex;
        justify-content: space-evenly;
        margin: 0 0 32px 0;
    }

    .extrasettings_for_course1{
        margin: 27px 0 0 0;
    }

    .coursePanel1{
        margin: 93px 0 0 30px;
        font-size: 22px;
        line-height: 27px;
        display: flex;
    }

    .courseTitleField{
        display: block;
        margin: auto;
        margin-top: 20vh;
        border-radius: 15px;
        font-weight: bold;
        font-size: 120%;;
    }

    body{
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    #container{
        display: flex;
    }

    .nocourses{
        display: block;
        margin: auto;
        grid-row: 1;
        grid-column-start: 3;
        grid-column-end: 5;
        text-align: center;
    }
</style>