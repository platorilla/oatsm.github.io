import React from "react";
import Filters from "./Filters";
import Job from "./Job";
import config from "./config";
import packageJson from "../package.json";

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

const data: JobData[] = config.jobs;

const REPO_URL = import.meta.env.OATSM_REPO_URL ?? "http://example.com";
const COMMIT_VERSION = import.meta.env.OATSM_COMMIT_VERSION ?? "abcdef123456";

const App = () => {
  const [providers, setProviders] = React.useState<string[]>([]);
  const [versions, setVersions] = React.useState<string[]>([]);
  const [topologies, setTopologies] = React.useState<string[]>([]);
  const [sizes, setSizes] = React.useState<string[]>([]);
  const [ingressControllers, setIngressControllers] = React.useState<string[]>([]);
  const [connectivities, setConnectivities] = React.useState<string[]>([]);

  const filterJobs = (job: JobData) => {
    const providerMatch = providers.length === 0 || providers.includes(job.provider);
    const versionMatch = versions.length === 0 || versions.includes(job.version);
    const topologyMatch = topologies.length === 0 || topologies.includes(job.topology);
    const sizeMatch = sizes.length === 0 || sizes.includes(job.size);
    const ingressControllerMatch = ingressControllers.length === 0 || ingressControllers.includes(job.ingressController);
    const connectivityMatch = connectivities.length === 0 || connectivities.includes(job.connectivity);
    return providerMatch && versionMatch && topologyMatch && sizeMatch && ingressControllerMatch && connectivityMatch;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Obcerv Automated Testing Support Matrix</h1>
        <div className="text-white">
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="mr-4 text-sm">
            {`${packageJson.version} (${COMMIT_VERSION})`}
          </a>
        </div>
      </nav>
      <div className="flex flex-1">
        <div className="w-1/6 p-4 flex flex-col justify-between shadow-lg bg-neutral-100">
          <div>
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
          </div>
          <div className="text-gray-600 text-sm mt-4">
            &copy; {new Date().getFullYear()} ITRS. All rights reserved.
          </div>
        </div>
        <div className="w-5/6 p-4">
          {data.filter(filterJobs).map((job, index) => (
            <Job key={index} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
