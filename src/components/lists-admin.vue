<template>
    <v-row>
        <v-col class="col-sm-12 round-report">
            <p class="topic1">รอบที่ 49 : วันที่ 26 - 28 ม.ค. 2565 สถานที่: เนคเทค</p>
        </v-col>
        <v-data-table 
            :headers="headers"
            :items="trainee"
            class="elevation-1"
        >
        </v-data-table>
    </v-row>
</template>
<script>
    export default {
        data(){
            return {
                headers: [
                    {
                      text: 'สิทธิ์',
                      align: 'start',
                      sortable: false,
                    },
                    { text: 'วารสาร' },
                    { text: 'ผู้ลงทะเบียน'},
                    { text: 'จำนวนผู้ชม'}
                ]
            }
        }
    }

</script>