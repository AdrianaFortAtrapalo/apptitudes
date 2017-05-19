<template>
    <div class="main-box">
        <div class="avatar">A</div>
        <div class="info">
            <span class="name">Adriana</span>
            <span class="mail">@adriana.fort</span>
            <ul class="aptitudes">
                <li class="aptitudes-li">JS <strong>10</strong></li>
                <li class="aptitudes-li">PHP <strong>2</strong></li>
                <li class="aptitudes-li">CSS <strong>34</strong></li>
                <li class="more-apptitudes"><router-link :to="{ name: 'ficha' }">+10</router-link></li>
            </ul>   
        </div> 
    </div>  
</template>
