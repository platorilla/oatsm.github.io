const config = {
    filters: {
        providers: [
            { key: "EKS", description: "AWS Elastic Kubernetes Service (EKS)" },
            { key: "OpenShift", description: "Red Hat OpenShift" }
        ],
        versions: ["1.29.0", "1.30.0", "1.31.0"],
        topologies: [
            { key: "HA", description: "High Availability" },
            { key: "Non-HA", description: "Non-High Availability" }
        ],
        sizes: ["Large", "Medium", "Small"],
        ingressControllers: ["ALB", "Nginx", "HAProxy"],
        connectivities: ["Online", "Air-Gapped"]
    },

    jobs: [
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
    ]
};

export default config;