<template>
    <div class="select-school" id="select-school">
        Please, select your school here
        <input type="text" placeholder="Search your school">
        <div class="choose_your_school_cont">
            <div class="school_block" v-for="school in schools" :key="school" @click="ToTeacherRegistration()">
                <div>{{ school }}</div>
            </div>
        </div>
        <button class="cant_find_school">
            Can’t find your school?
        </button>
    </div>
</template>

<script>
export default {
  name: 'select-school-comp',
  data () {
        return {
            schools: ['School#1', 'School#2', 'School#3', 'School#4']
        }
  },
  methods: {
        ToTeacherRegistration() {
            document.getElementById('select-school').style.display = 'none';
            document.getElementById('teacher-reg').style.display = 'block';
        }
  }
}
</script>

<style>
    .select-school {
        padding: 15px 70px;
        display: none;
        flex-direction: column;
        align-items: center;
        background: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;

        color: #666666;
    }

    .select-school input {
        margin: 10px 0 0 0;
        border: 0px;
        padding: 5px 50px;
        text-align: center;
        background: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

    .choose_your_school_cont {
        margin: 23px 0;


        background: rgba(0, 0, 0, 0.2);
        border-radius: 8px;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        flex-direction: column;
        align-items: center;

        color: #000000;
    }

    .school_block{
        padding: 18px 100px;
        width: 376px;
        margin: 5px 8px;
        background: #FFFFFF;
        box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        text-align: center;
    }
    
    .cant_find_school {
        padding: 7px 10px;

        border: 2px solid #BEBEBE;
        box-sizing: border-box;
        border-radius: 11px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #666666;
        background-color: white;
    }
</style>