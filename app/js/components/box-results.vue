<template>
    <div>
        <div class="avatar">A</div>
        <div class="info">
            <span class="name">Adriana</span>
            <span class="mail">@adriana.fort</span>
            <ul class="aptitudes">
                <li class="aptitudes-li">JS <span>10</span></li>
                <li><router-link :to="{ name: 'ficha' }">+10</router-link></li>
            </ul>
        </div>
    </div>
</template>
