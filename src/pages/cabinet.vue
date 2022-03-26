<template>
    <div id="container">

        <div class="my_courses_column">
            <div class="my_courses_column_name">Мои курсы</div>
            <div class="my_courses">
                <div class="nocourses" v-if="nocourses==true" >
                    <p>You haven't created any courses yet.</p>
                    <button class="btn_create_course">Create a course</button>
                </div>
            </div>
        </div>
        <div class="coursePanel" v-if="current!=''">
            <div class="settings_for_course">
                <input type="text" placeholder="Type your course name" class="name_of_course">
                <div class="extrasettings_for_course">
                    <div class="type_price">
                        <p>Course type:</p>
                        <select name="select" class="type_of_course">
                            <option value="value1" selected>Public</option>
                            <option value="value2">Value 2</option>
                            <option value="value3">Value 3</option>
                        </select>
                        <p>Cost:</p>
                        <input class="cost_numbers" type="text" placeholder="Course cost">
                        <select name="select" class="price_of_course1">
                            <option value="value1" selected>RUB</option>
                            <option value="value2">USD</option>
                            <option value="value3">EUR</option>
                        </select>
                    </div>
                    <div class="desription_poster">
                        <div class="poster">
                            <input name="myFile" type="file" class="upload_poster">
                            <div class="poster-text">Add preview</div>
                        </div>
                        <textarea class="course_description" placeholder="Введите описание курса"></textarea>
                    </div>
                </div>
                <button class="btn-dashboard" @click="open_dashboard"><p>Course Dashboard</p></button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Cabinet',
    components: {
        
    },
    data () { 
        return {
            nocourses: true,
            current: 'lel',
            title: 'тут название курса'
        }
    },
    methods: {
        changeCourse(course){
            alert(course)
        },
        open_dashboard(){
            this.$router.push('dashboard');
        }

    }
}

</script>

<style lang="css">
    .price_of_course1 {
        margin: 13px 0 0 -100px;
        padding: 0 0 0 5px;
        max-height: 25px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 22px;
        color: #FFFFFF;
    }

    .cost_numbers {
        padding: 0 0 0 15px;
        min-height: 51px;
        font-size: 19px;
        background: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        border-width: 1px;
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

    .coursePanel p{
        font-size: 24px;
    }
    

    .type_of_course {
        padding: 0 5px 0 20px;
        font-size: 20px;
        background: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        min-height: 51px;
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
        align-items: baseline;
    }

    .extrasettings_for_course{
        margin: 27px 0 0 0;
    }

    .settings_for_course{
        margin: 93px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        flex: 0 1;
    }

    .coursePanel{
        margin: 0 auto;
        display: flex;
        align-items: center;
        align-content: center;
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