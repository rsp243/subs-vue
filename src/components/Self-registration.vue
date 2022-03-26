<template>
    <div class="self-registr" id="self-registr">
        <h2>Almost done</h2>
        <div class="gender">
            <div class="text">Your gender</div>
            <select>
                <option>Пункт 1</option>
                <option>Пункт 2</option>
            </select>
        </div>
        <div class="date-of-birth">
            <div class="text">Date of birth</div>
            <input type="date" id="date_of_birth" value="2022-03-25">
        </div>
    </div>
</template>

<script>
export default {
  name: 'self-registration-comp',
  data () {
        return {}
  },
  methods: {

  }
}
</script>

<style>
    .self-registr {
        display: none;
        flex-direction: column;
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

    .self-registr h2 {
        margin: 23px 22px 15px 22px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;

        color: #666666;
    }

    .gender, .date-of-birth {
        display: flex;
        justify-content: space-evenly;
    }
</style>