import Filters from "./Filters";
import Job from "./Job";
import React from "react";

const App = () => {
  const [clusters, setClusters] = React.useState<string[]>([]);
  const data = [
    {
      provider: "EKS",
      topology: "HA",
      version: "1.29.0",
      connectivity: "Online",
      size: "Large",
      ingressController: "ALB",
      jobStatusImageUrl: "https://jenkins.itrsgroup.com/job/Apps/job/QA/job/obcerv-tests/job/dev/",
      jobUrl: "https://jenkins.itrsgroup.com/buildStatus/icon?job=Apps%2FQA%2Fobcerv-tests%2Fdev/"
    },
    {
      provider: "OpenShift",
      topology: "Non-HA",
      version: "1.31.0",
      connectivity: "Air-Gapped",
      size: "Medium",
      ingressController: "Nginx",
      jobStatusImageUrl: "https://jenkins.itrsgroup.com/job/Apps/job/QA/job/obcerv-tests/job/dev/",
      jobUrl: "https://jenkins.itrsgroup.com/buildStatus/icon?job=Apps%2FQA%2Fobcerv-tests%2Fdev/"
    }
  ];

  return (
    <>
      {data.filter((job) => {
        if (clusters.length === 0) return true;
        return clusters.includes(job.provider);
      }).map((job, index) => <Job key={index} {...job}></Job>)}
      <Filters clusters={clusters} setClusters={setClusters}></Filters>
    </>
  );
}

export default App;
