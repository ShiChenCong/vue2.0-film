<template>
    <section id="main">
        <mt-header fixed title="注册">
            <mt-button icon="login" slot="left" @click="goLogin">登录</mt-button>
        </mt-header>
        <div class="line1"></div>
        <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
        <div class="line2"></div>
        <mt-button type="primary" size="large" @click.native="userRegister">确认</mt-button>
    </section>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default {
        data() {
            return{

            }
        },
        methods:{
            goLogin(){

                this.$router.go(-1)
            },
            userRegister(){
                Toast({
                    message:'注册成功',
                    iconClass:'icon icon-success'
                })
            }
        }
    }
</script>
<style>
.line1{
    border-top:15px white solid;
}
.line2{
    border-top:15px rgb(224,224,224) solid;
}
</style>

