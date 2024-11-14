import React from "react";
import Filters from "./Filters";
import Job from "./Job";

interface JobData {
  provider: string;
  topology: string;
  version: string;
  connectivity: string;
  size: string;
  ingressController: string;
  jobStatusImageUrl: string;
  jobUrl: string;
}

const data: JobData[] = [
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
  },
  {
    provider: "OpenShift",
    topology: "HA",
    version: "1.31.0",
    connectivity: "Online",
    size: "Medium",
    ingressController: "HAProxy",
    jobStatusImageUrl: "https://jenkins.itrsgroup.com/job/Apps/job/QA/job/obcerv-tests/job/dev/",
    jobUrl: "https://jenkins.itrsgroup.com/buildStatus/icon?job=Apps%2FQA%2Fobcerv-tests%2Fdev/"
  }
];

const App = () => {
  const [providers, setProviders] = React.useState<string[]>([]);
  const [versions, setVersions] = React.useState<string[]>([]);
  const [topologies, setTopologies] = React.useState<string[]>([]);
  const [sizes, setSizes] = React.useState<string[]>([]);
  const [ingressControllers, setIngressControllers] = React.useState<string[]>([]);
  const [connectivities, setConnectivities] = React.useState<string[]>([]);


  const filterJobs = (job: JobData) => {
    const providerMatch = providers.length === 0 || providers.includes(job.provider);
    const topologyMatch = topologies.length === 0 || topologies.includes(job.topology);
    const sizeMatch = sizes.length === 0 || sizes.includes(job.size);
    const ingressControllerMatch = ingressControllers.length === 0 || ingressControllers.includes(job.ingressController);
    const connectivityMatch = connectivities.length === 0 || connectivities.includes(job.connectivity);
    return providerMatch && topologyMatch && sizeMatch && ingressControllerMatch && connectivityMatch;
  };

  return (
    <div className="p-4">
      <p>
        <Filters
          providers={providers}
          setProviders={setProviders}
          versions={versions}
          setVersions={setVersions}
          topologies={topologies}
          setTopologies={setTopologies}
          sizes={sizes}
          setSizes={setSizes}
          ingressControllers={ingressControllers}
          setIngressControllers={setIngressControllers}
          connectivities={connectivities}
          setConnectivities={setConnectivities}
        />
      </p>
      <p>
        {data.filter(filterJobs).map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </p>
    </div>
  );
};

export default App;
