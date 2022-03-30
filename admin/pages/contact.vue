<template>
  <main>
    <table>
      <caption>
        Client Messages
      </caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Message</th>
          <th scope="col">created_at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" v-bind:key="item">
          <td data-label="Account">{{ item.name }}</td>
          <td data-label="Due Date">{{ item.email }}</td>
          <td data-label="Amount">{{ item.message }}</td>
          <td data-label="Period">{{ item.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

export default {
     name:"Contacts",
    data()
    {
        return{list:undefined}
    },
    mounted()
    {
        $axios.$get("http://localhost:3000/api/contacts")
        .then((resp)=>{
            this.list=resp.data.data
            console.warn(resp.data)
    })
}
}





    /*async asyncData({ $axios }) {
        try {
            let response = await $axios.$get("http://localhost:3000/api/contacts");
            return {
                names: response.name,
                emails:response.email,
                numbers:response.number,
                messages:response.message,
                created_at:response.created_at
            };
        } catch (err){
            console.log(err);
        }
    },*/
</script>

<style>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}

/* general styling */
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}
</style>
