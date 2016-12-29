<template>
    <section id="main">
        <mt-header fixed title="登录">
            <mt-button slot="left" @click="goBack">返回</mt-button>
            <mt-button slot="right" @click="register">注册</mt-button>
        </mt-header>
        <div class="user">
            <div class="userHeader"></div>
        </div>
        <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
        <div class="line"></div>
        <mt-button type="primary" size="large" @click.native="userLogin">登录</mt-button>
    </section>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return {

            }
        },
        methods:{
            userLogin(){
                Toast({
                    message:'登录成功',
                    iconClass:'icon icon-success'
                })
            },
            goBack(){
                console.log (this.$router)
                this.$router.go(-1)
            },
            register(){
                this.$router.push({ path: '/register' })
            }
        }
    }
</script>
<style>
.user{
    height:120px;
    background:white;
}
.userHeader{
    background:black;
    border-radius:40px;
    width:80px;
    height:80px;
    position:relative;
    top:15px;
    margin-left:auto;
    margin-right:auto;
}
.line{
    border-top:15px rgb(224,224,224) solid;
}
.mint-header,.mint-button--primary {
    background-color: #41b883;
}

</style>

