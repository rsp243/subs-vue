<template>
    <div id="container1">
        <div class="name1">
            <div class="SubsName">SubSchool</div>
            <div class="subtext">For teachers</div>
            <signup/>
            <selectschool/>
            <teacherreg/>
            <selectsubject1/>
            <selfregistr/>
        </div>
    </div>
</template>

<script>
import signup from '@/components/sign-up.vue'
import selectschool from '@/components/Select-school.vue'
import teacherreg from '@/components/Teachers-reg.vue'
import selectsubject1 from '@/components/Select-subject.vue'
import selfregistr from '@/components/Self-registration.vue'


export default {
    name: 'Teachers-registration',
    components: { 
        signup,
        selectschool,
        teacherreg,
        selectsubject1,
        selfregistr
    },
    data () { 
        return {}
    },
    methods: { },
}

</script>

<style lang="css">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&family=Montserrat:wght@600;700&family=Roboto:wght@700&display=swap');

    body {
        background: #EFEAF2;
    }

    .name1 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .SubsName {
        font-family: 'Montserrat Alternates', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 64px;
        line-height: 78px;
        text-align: center;

        background: linear-gradient(270.4deg, #4E1695 0.23%, #A574D7 101.33%);

        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;

        margin: 100px 0 0 0;
    }

    .subtext {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: #4E1695;

        border: solid 3px #4E1695;
        border-radius: 12px;
        padding: 8px 12px 8px 12px;
        margin: 26px 0 60px 0;
    }
</style>