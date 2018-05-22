<template>
    <div>
        你好{{user.user}}
        <button @click="unlogin">注销</button>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    data() {
        return {
        }
    },

    computed: {
        ...mapGetters(['user'])
    },

    methods: {
        ...mapMutations(['updateUserInfo']),

        unlogin() {
            this.updateUserInfo('')
            this.$router.push({
                name: 'HelloWorld'
            })
        }
    }
}
</script>

<style>

</style>
