import { defineComponent } from 'vue';
import fetchData from '../api';

export type JobType = {
  company: string;
  company_logo: string;
  company_url: string;
  created_at: string;
  description: string;
  how_to_apply: string;
  id: string;
  location: string;
  title: string;
  type: string;
  url: string;
};

type Data = {
  jobList: JobType[];
};

export default defineComponent({
  data(): Data {
    return {
      jobList: [],
    };
  },
  methods: {
    async doThing() {
      const { data } = await fetchData();
      this.jobList = data;
    },
  },
  created() {
    this.doThing();
  },
});
