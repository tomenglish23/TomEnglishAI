import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function AWSDictionary() {

  return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AWS Dictionary</h1>
                <p>I had this handy. <br />Keeping it here in case AWS has good Machine Learning technology.</p>
            </header>            
            <main>
            <table style={{ width:'90%' }}>
              <colgroup>
                <col style={{ width: '34%' }} />
                <col />
                <col />
              </colgroup>
              <tbody>
                <tr><td></td></tr>
                <tr><td>SECTION: A</td><td>A</td></tr>
                <tr><td>AAD</td><td>See additional authenticated data.</td></tr>
                <tr><td>access control list (ACL)</td><td>A document that defines who can access a particular bucket or object. Each bucket & object in Amzn S3 has an ACL. The document defines what each type of user can do, such as write & read permissions.</td></tr>
                <tr><td>access identifiers</td><td>See credentials.</td></tr>
                <tr><td>access key</td><td>The combination of an access key ID (like AKIAIOSFODNN7EXAMPLE) & a secret access key (like wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY). You use access keys to sign API requests that you make to AWS.</td></tr>
                <tr><td>access key ID</td><td>A unique identifier that's associated with a secret access key; the access key ID & secret access key are used together to sign programmatic AWS requests cryptographically.</td></tr>
                <tr><td>access key rotation</td><td>A method to increase security by changing the AWS access key ID. This method enables you to retire an old key at your discretion.</td></tr>
                <tr><td>access policy language</td><td>A language for writing documents (that is, policies) that specify who can access a particular AWS resource & under what conditions.</td></tr>
                <tr><td>account</td><td>"A formal relationship with AWS that is associated with (1) the owner email address & password, (2) the control of resources created under its umbrella, & (3) payment for the AWS activity related to those resources. The AWS account has permission to do anything & everything with all the AWS account resources.  This is in contrast to a user, which is an entity contained within the account."</td></tr>
                <tr><td>account activity</td><td>A web page showing your month-to-date AWS usage & costs. The account activity page is located at http://aws.amazon.com/account-activity/.</td></tr>
                <tr><td>ACL</td><td>See access control list (ACL).</td></tr>
                <tr><td>ACM</td><td>See AWS Certificate Mgr (ACM).</td></tr>
                <tr><td>action</td><td>An API function. Also called operation or call. The activity the principal has permission to perform. The action is B in the statement "A has permission to do B to C where D applies." EX, Jane sends a request to Amzn SQS with Action=ReceiveMessage. </td></tr>
                <tr><td></td><td>"Amzn CloudWatch: The response initiated by the change in an alarm's state: for example, from OK to ALARM. The state change may be triggered by a metric reaching the alarm threshold, or by a SetAlarmState request. Each alarm can have one or more actions assigned to each state.  Actions are performed once each time the alarm changes to a state that has an action assigned, such as an Amzn Simple Notification Svc notification, an Auto Scaling policy execution or an Amzn EC2 instance stop/terminate action."</td></tr>
                <tr><td>active trusted signers</td><td>A list showing each of the trusted signers you've specified & the IDs of the corresponding active key pairs that Amzn CloudFront is aware of. To be able to create working signed URLs, a trusted signer must appear in this list with at least one key pair ID.</td></tr>
                <tr><td>additional authenticated data</td><td>Information that is checked for integrity but not encrypted, such as headers or other contextual metadata.</td></tr>
                <tr><td>administrative suspension</td><td>Auto Scaling might suspend processes for Auto Scaling group that repeatedly fail to launch instances. Auto Scaling groups that most commonly experience administrative suspension have zero running instances, have been trying to launch instances for more than 24 hours, & have not succeeded in that time. </td></tr>
                <tr><td>alarm</td><td>An item that watches a single metric over a specified time period, & triggers an Amzn SNS topic or an Auto Scaling policy if the value of the metric crosses a threshold value over a predetermined number of time periods.</td></tr>
                <tr><td>allow</td><td>One of two possible outcomes (the other is deny) when an IAM access policy is evaluated. When a user makes a request to AWS, AWS evaluates the request based on all permissions that apply to the user & then returns either allow or deny.</td></tr>
                <tr><td>Amzn API Gateway</td><td>A fully managed Svc that makes it easy for developers to create, publish, maintain, monitor, & secure APIs at any scale.  See Also http://aws.amazon.com/api-gateway.</td></tr>
                <tr><td>Amzn AppStream</td><td>A web Svc for streaming existing Windows Apps from the cloud to any device.  See Also http://aws.amazon.com/appstream/.</td></tr>
                <tr><td>Amzn Aurora</td><td>A fully managed MySQL-compatible relational DB engine that combines the speed & availability of commercial DBs with the simplicity & cost-effectiveness of open source DBs.  See Also http://aws.amazon.com/rds/aurora/.</td></tr>
                <tr><td>Amzn CloudFront</td><td>An AWS content delivery Svc that helps you improve the performance, reliability, & availability of your websites & Apps.  See Also http://aws.amazon.com/cloudfront.</td></tr>
                <tr><td>Amzn CloudSearch</td><td>A fully managed Svc in the AWS cloud that makes it easy to set up, manage, & scale a search solution for your website or App. </td></tr>
                <tr><td>Amzn CloudWatch</td><td>A web Svc that enables you to monitor & manage various metrics, & configure alarm actions based on data from those metrics.  See Also http://aws.amazon.com/cloudwatch.</td></tr>
                <tr><td>Amzn CloudWatch Events</td><td>A web Svc that enables you to deliver a timely stream of system events that describe changes in AWS resources to AWS Lambda functions, streams in Amzn Kinesis Streams, Amzn Simple Notification Svc topics, or built-in targets.  See Also http://aws.amazon.com/cloudwatch.</td></tr>
                <tr><td>Amzn CloudWatch Logs</td><td>A web Svc for monitoring & troubleshooting your systems & Apps from your existing system, App, & custom log files. You can send your existing log files to CloudWatch Logs & monitor these logs in near real-time.  See Also http://aws.amazon.com/cloudwatch.</td></tr>
                <tr><td>Amzn Cognito</td><td>A web Svc that makes it easy to save mobile user data, such as app preferences or game state, in the AWS cloud without writing any back-end code or managing any infrastructure. Amzn Cognito offers mobile identity Mgmt & data synchronization across devices.  See Also http://aws.amazon.com/cognito/.</td></tr>
                <tr><td>Amzn DevPay</td><td>An easy-to-use online billing & account Mgmt Svc that makes it easy for you to sell an Amzn EC2 AMI or an App built on Amzn S3.  See Also http://aws.amazon.com/devpay.</td></tr>
                <tr><td>Amzn DynamoDB</td><td>A fully managed NoSQL DB Svc that provides fast & predictable performance with seamless scalability.  See Also http://aws.amazon.com/dynamodb/.</td></tr>
                <tr><td>Amzn DynamoDB Storage Backend for Titan</td><td>A storage backend for the Titan graph DB implemented on top of Amzn DynamoDB. Titan is a scalable graph DB optimized for storing & querying graphs.  See Also http://aws.amazon.com/dynamodb/.  Amzn DynamoDB Streams	An AWS Svc that captures a time-ordered sequence of item-level modifications in any Amzn DynamoDB table, & stores this information in a log for up to 24 hours. Apps can access this log & view the data items as they appeared before & after they were modified, in near real time.  See Also http://aws.amazon.com/dynamodb/.</td></tr>
                <tr><td>Amzn Elastic Block Store (Amzn EBS)</td><td>A Svc that provides block level storage volumes for use with EC2 instances.  See Also http://aws.amazon.com/ebs.  Amzn EBS-backed AMI	A type of Amzn Machine Image (AMI) whose instances use an Amzn EBS volume as their root device. Compare this with instances launched from instance store-backed AMIs, which use the instance store as the root device.</td></tr>
                <tr><td>Amzn EC2 Container Registry (Amzn ECR)</td><td>A fully managed Docker container registry that makes it easy for developers to store, manage, & deploy Docker container images. Amzn ECR is integrated with Amzn EC2 Container Svc (Amzn ECS) & AWS Identity & Access Mgmt (IAM).  See Also http://aws.amazon.com/ecr.</td></tr>
                <tr><td>Amzn EC2 Container Svc (Amzn ECS)</td><td>A highly scalable, fast, container Mgmt Svc that makes it easy to run, stop, & manage Docker containers on a cluster of EC2 instances.  See Also http://aws.amazon.com/ecs.</td></tr>
                <tr><td>Amzn ECS Svc</td><td>A Svc for running & maintaining a specified number of tasks (instantiations of a task definition) simultaneously. </td></tr>
                <tr><td>Amzn EC2 VM Import Connector</td><td>See http://aws.amazon.com/ec2/vm-import.</td></tr>
                <tr><td>Amzn Elastic Compute Cloud (Amzn EC2)</td><td>A web Svc that enables you to launch & manage Linux/UNIX & Windows server instances in Amzn's data centers.  See Also http://aws.amazon.com/ec2.</td></tr>
                <tr><td>Amzn Elastic File System (Amzn EFS)</td><td>A file storage Svc for EC2 instances. Amzn EFS is easy to use & provides a simple interface with which you can create & configure file systems. Amzn EFS storage capacity grows & shrinks automatically as you add & remove files.  See Also http://aws.amazon.com/efs/.</td></tr>
                <tr><td>Amzn EMR (Amzn EMR)</td><td>A web Svc that makes it easy to process large amounts of data efficiently. Amzn EMR uses Hadoop processing combined with several AWS products to do such tasks as web indexing, data mining, log file analysis, machine learning, scientific simulation, & data warehousing.  See Also http://aws.amazon.com/elasticmapreduce.</td></tr>
                <tr><td>Amzn Elastic Transcoder</td><td>A cloud-based media transcoding Svc. Elastic Transcoder is a highly scalable tool for converting (or transcoding) media files from their source format into versions that will play on devices like smartphones, tablets, & PCs.  See Also http://aws.amazon.com/elastictranscoder/.</td></tr>
                <tr><td>Amzn ElastiCache</td><td>A web Svc that simplifies deploying, operating, & scaling an in-memory cache in the cloud. The Svc improves the performance of web Apps by providing information retrieval from fast, managed, in-memory caches, instead of relying entirely on slower disk-based DBs.  See Also http://aws.amazon.com/elasticache/.</td></tr>
                <tr><td>Amzn Elasticsearch Svc (Amzn ES)</td><td>An AWS-managed Svc for deploying, operating, & scaling Elasticsearch, an open-source search & analytics engine, in the AWS Cloud. Amzn Elasticsearch Svc (Amzn ES) also offers security options, high availability, data durability, & direct access to the Elasticsearch APIs.  See Also http://aws.amazon.com/elasticsearch-Svc.</td></tr>
                <tr><td>Amzn GameLift</td><td>A managed Svc for deploying, operating, & scaling session-based multiplayer games.  See Also http://aws.amazon.com/gamelift/.</td></tr>
                <tr><td>Amzn Glacier</td><td>A secure, durable, & low-cost storage Svc for data archiving & long-term backup. You can reliably store large or small amounts of data for significantly less than on-premises solutions. Amzn Glacier is optimized for infrequently accessed data, where a retrieval time of several hours is suitable.  See Also http://aws.amazon.com/glacier/.</td></tr>
                <tr><td>Amzn Inspector</td><td>"An automated security assessment Svc that helps improve the security & compliance of Apps deployed on AWS. Amzn Inspector automatically assesses Apps for vulnerabilities or deviations from best practices. <br />
                After performing an assessment, Amzn Inspector produces a detailed report with prioritized steps for remediation." See Also http://aws.amazon.com/inspector.</td></tr>
                <tr><td>Amzn Kinesis</td><td>A platform for streaming data on AWS. Amzn Kinesis offers Svcs that simplify the loading & analysis of streaming data.  See Also http://aws.amazon.com/kinesis/.</td></tr>
                <tr><td>Amzn Kinesis Firehose</td><td>"A fully managed Svc for loading streaming data into AWS. Firehose can capture & automatically load streaming data into Amzn S3 & Amzn Redshift , enabling near real-time analytics with existing business intelligence tools & dashboards. <br />
                Firehose automatically scales to match the throughput of your data & requires no ongoing administration. It can also batch, compress, & encrypt the data before loading it. " See Also http://aws.amazon.com/kinesis/firehose/.</td></tr>
                <tr><td>Amzn Kinesis Streams</td><td>A web Svc for building custom Apps that process or analyze streaming data for specialized needs. Amzn Kinesis Streams can continuously capture & store terabytes of data per hour from hundreds of thousands of sources.  See Also http://aws.amazon.com/kinesis/streams/.</td></tr>
                <tr><td>Amzn Lumberyard</td><td>A cross-platform, 3D game engine for creating high-quality games. You can connect games to the compute & storage of the AWS cloud & engage fans on Twitch.  See Also http://aws.amazon.com/lumberyard/.</td></tr>
                <tr><td>Amzn Machine Image (AMI)</td><td>An encrypted machine image stored in Amzn Elastic Block Store (Amzn EBS) or Amzn Simple Storage Svc. AMIs are like a template of a computer's root drive. They contain the operating system & can also include software & layers of your App, such as DB servers, middleware, web servers, & so on. </td></tr>
                <tr><td>Amzn Machine Learning</td><td>A cloud-based Svc that creates machine learning (ML) models by finding patterns in your data, & uses these models to process new data & generate predictions.  See Also http://aws.amazon.com/machine-learning/.</td></tr>
                <tr><td>Amzn ML</td><td>See Amzn Machine Learning.</td></tr>
                <tr><td>Amzn Mobile Analytics</td><td>A Svc for collecting, visualizing, understanding, & extracting mobile app usage data at scale.  See Also http://aws.amazon.com/mobileanalytics.</td></tr>
                <tr><td>Amzn Redshift </td><td>A fully managed, petabyte-scale data warehouse Svc in the cloud. With Amzn Redshift you can analyze your data using your existing business intelligence tools.  See Also http://aws.amazon.com/redshift/.</td></tr>
                <tr><td>Amzn Relational DB Svc (Amzn RDS)</td><td>A web Svc that makes it easier to set up, operate, & scale a relational DB in the cloud. It provides cost-efficient, resizable capacity for an industry-standard relational DB & manages common DB administration tasks.  See Also http://aws.amazon.com/rds.</td></tr>
                <tr><td>Amzn Resource Name (ARN)</td><td>A standardized way to refer to an AWS resource. EX: arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/Bob.</td></tr>
                <tr><td>Amzn Route 53</td><td>A web Svc you can use to create a new DNS Svc or to migrate your existing DNS Svc to the cloud.  See Also http://aws.amazon.com/route53.</td></tr>
                <tr><td>Amzn S3</td><td>See Amzn Simple Storage Svc (Amzn S3).</td></tr>
                <tr><td>Amzn S3-Backed AMI</td><td>See instance store-backed AMI.</td></tr>
                <tr><td>Amzn Silk</td><td>A next-generation web browser available only on Fire OS tablets & phones. Built on a split architecture that divides processing between the client & the AWS cloud, Amzn Silk is designed to create a faster, more responsive mobile browsing experience.</td></tr>
                <tr><td>Amzn Simple Email Svc (Amzn SES)</td><td>An easy-to-use, cost-effective email solution for Apps.  See Also http://aws.amazon.com/ses.</td></tr>
                <tr><td>Amzn Simple Notification Svc (Amzn SNS)</td><td>A web Svc that enables Apps, end-users, & devices to instantly send & receive notifications from the cloud.  See Also http://aws.amazon.com/sns.</td></tr>
                <tr><td>Amzn Simple Queue Svc (Amzn SQS)</td><td>Reliable & scalable hosted queues for storing messages as they travel between computers.  See Also http://aws.amazon.com/sqs.</td></tr>
                <tr><td>Amzn Simple Storage Svc (Amzn S3)</td><td>Storage for the Internet. You can use it to store & retrieve any amount of data at any time, from anywhere on the web.  See Also http://aws.amazon.com/s3.</td></tr>
                <tr><td>Amzn Simple Workflow Svc (Amzn SWF)</td><td>A fully managed Svc that helps developers build, run, & scale background jobs that have parallel or sequential steps. Amzn SWF is like a state tracker & task coordinator in the cloud.  See Also http://aws.amazon.com/swf/.</td></tr>
                <tr><td>Amzn Virtual Private Cloud (Amzn VPC)</td><td>"A web Svc for provisioning a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network that you define. <br />
                You control your virtual networking environment, including selection of your own IP address range, creation of subnets, & configuration of route tables & network gateways." See Also http://aws.amazon.com/vpc.</td></tr>
                <tr><td>Amzn VPC</td><td>See Amzn Virtual Private Cloud (Amzn VPC).</td></tr>
                <tr><td>Amzn Web Svcs (AWS)</td><td>An infrastructure web Svcs platform in the cloud for companies of all sizes.  See Also http://aws.amazon.com/what-is-cloud-computing/.</td></tr>
                <tr><td>Amzn WorkDocs</td><td>A managed, secure enterprise document storage & sharing Svc with administrative controls & feedback capabilities.  See Also http://aws.amazon.com/workdocs/.</td></tr>
                <tr><td>Amzn WorkMail</td><td>A managed, secure business email & calendar Svc with support for existing desktop & mobile email clients.  See Also http://aws.amazon.com/workmail/.</td></tr>
                <tr><td>Amzn WorkSpaces</td><td>A managed, secure desktop computing Svc for provisioning cloud-based desktops & providing users access to documents, Apps, & resources from supported devices.  See Also http://aws.amazon.com/workspaces/.</td></tr>
                <tr><td>Amzn WorkSpaces App Mgr (Amzn WAM)</td><td>A web Svc for deploying & managing Apps for Amzn WorkSpaces. Amzn WAM accelerates software deployment, upgrades, patching, & retirement by packaging Windows desktop Apps into virtualized App containers.  See Also http://aws.amazon.com/workspaces/AppMgr.</td></tr>
                <tr><td>AMI</td><td>See Amzn Machine Image (AMI).</td></tr>
                <tr><td>analysis scheme</td><td>Amzn CloudSearch: Language-specific text analysis options that are applied to a text field to control stemming & configure stopwords & synonyms. </td></tr>
                <tr><td>App</td><td>AWS Elastic Beanstalk: A logical collection of components, including environments, versions, & environment configurations. An App is conceptually similar to a folder.</td></tr>
                <tr><td></td><td>AWS CodeDeploy: A name that uniquely identifies the App to be deployed. AWS CodeDeploy uses this name to ensure the correct combination of revision, deployment configuration, & deployment group are referenced during a deployment.</td></tr>
                <tr><td>App Billing</td><td>The location where your customers manage the Amzn DevPay products they've purchased. The web address is http://www.amazon.com/dp-Apps.</td></tr>
                <tr><td>App revision</td><td>"AWS CodeDeploy: An archive file containing source content—such as source code, web pages, executable files, & deployment scripts—along with an App specification file. <br />
                Revisions are stored in Amzn S3 buckets or GitHub repositories. For Amzn S3, a revision is uniquely identified by its Amzn S3 object key & its ETag, version, or both. For GitHub, a revision is uniquely identified by its commit ID."</td></tr>
                <tr><td>App specification file</td><td>AWS CodeDeploy: A YAML-formatted file used to map the source files in an App revision to destinations on the instance; specify custom permissions for deployed files; & specify scripts to be run on each instance at various stages of the deployment process.</td></tr>
                <tr><td>App version</td><td>AWS Elastic Beanstalk: A specific, labeled iteration of an App that represents a functionally consistent set of deployable App code. A version points to an Amzn S3 object (a JAVA WAR file) that contains the App code. </td></tr>
                <tr><td>AppSpec file</td><td>See App specification file.</td></tr>
                <tr><td>AUC</td><td>"Area Under a Curve. An industry-standard metric to evaluate the quality of a binary classification machine learning model. <br />
                AUC measures the ability of the model to predict a higher score for positive examples, those that are “correct,” than for negative examples, those that are “incorrect.” <br />
                The AUC metric returns a decimal value from 0 to 1. AUC values near 1 indicate an ML model that is highly accurate."</td></tr>
                <tr><td>ARN</td><td>See Amzn Resource Name (ARN).</td></tr>
                <tr><td>artifact</td><td>AWS CodePipeline: A copy of the files or changes that will be worked upon by the pipeline. </td></tr>
                <tr><td>asymmetric encryption</td><td>Encryption that uses both a public key & a private key.</td></tr>
                <tr><td>asynchronous bounce</td><td>A type of bounce that occurs when a receiver initially accepts an email message for delivery & then subsequently fails to deliver it.</td></tr>
                <tr><td>atomic counter</td><td>DynamoDB: A method of incrementing or decrementing the value of an existing attribute without interfering with other write requests.</td></tr>
                <tr><td>attribute</td><td>A fundamental data element, something that does not need to be broken down any further. In DynamoDB, attributes are similar in many ways to fields or columns in other DB systems.</td></tr>
                <tr><td></td><td>Amzn Machine Learning: A unique, named property within an observation in a data set. In tabular data, such as spreadsheets or comma-separated values (.csv) files, the column headings represent the attributes, & the rows contain values for each attribute.</td></tr>
                <tr><td>Aurora</td><td>See Amzn Aurora.</td></tr>
                <tr><td>authenticated encryption</td><td>Encryption that provides confidentiality, data integrity, & authenticity assurances of the encrypted data.</td></tr>
                <tr><td>authentication</td><td>The process of proving your identity to a system.</td></tr>
                <tr><td>Auto Scaling</td><td>A web Svc designed to launch or terminate instances automatically based on user-defined policies, schedules, & health checks.  See Also http://aws.amazon.com//autoscaling.</td></tr>
                <tr><td>Auto Scaling group</td><td>A representation of multiple EC2 instances that share similar characteristics, & that are treated as a logical grouping for the purposes of instance scaling & Mgmt.</td></tr>
                <tr><td>Availability Zone</td><td>A distinct location within a region that is insulated from failures in other Availability Zones, & provides inexpensive, low-latency network connectivity to other Availability Zones in the same region.</td></tr>
                <tr><td>AWS</td><td>See Amzn Web Svcs (AWS).</td></tr>
                <tr><td>AWS App Discovery Svc</td><td>A web Svc that helps you plan to migrate to AWS by identifying IT assets in a data center—including servers, virtual machines, Apps, App dependencies, & network infrastructure.  See Also http://aws.amazon.com/about-aws/whats-new/2016/04/aws-App-discovery-Svc/.</td></tr>
                <tr><td>AWS Billing & Cost Mgmt</td><td>"The AWS cloud computing model in which you pay for Svcs on demand & use as much or as little at any given time as you need. <br />
                While resources are active under your account, you pay for the cost of allocating those resources & for any incidental usage associated with those resources, such as data transfer or allocated storage." See Also http://aws.amazon.com/billing/new-user-faqs/.</td></tr>
                <tr><td>AWS Certificate Mgr (ACM)</td><td>A web Svc for provisioning, managing, & deploying Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS Svcs.  See Also http://aws.amazon.com/certificate-Mgr/.</td></tr>
                <tr><td>AWS CloudFormation</td><td>A Svc for writing or changing templates that create & delete related AWS resources together as a unit.  See Also http://aws.amazon.com/cloudformation.</td></tr>
                <tr><td>AWS CloudHSM</td><td>A web Svc that helps you meet corporate, contractual, & regulatory compliance requirements for data security by using dedicated hardware security module (HSM) appliances within the AWS cloud.  See Also http://aws.amazon.com/cloudhsm/.</td></tr>
                <tr><td>AWS CloudTrail</td><td>"A web Svc that records AWS API calls for your account & delivers log files to you. <br />
                The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, & the response elements returned by the AWS Svc." See Also http://aws.amazon.com/cloudtrail/.</td></tr>
                <tr><td>AWS CodeCommit</td><td>A fully managed source control Svc that makes it easy for companies to host secure & highly scalable private Git repositories.  See Also http://aws.amazon.com/codecommit.</td></tr>
                <tr><td>AWS CodeDeploy</td><td>A Svc that automates code deployments to any instance, including EC2 instances & instances running on-premises.  See Also http://aws.amazon.com/codedeploy.</td></tr>
                <tr><td>AWS CodeDeploy agent</td><td>A software package that, when installed & configured on an instance, enables that instance to be used in AWS CodeDeploy deployments.</td></tr>
                <tr><td>AWS CodePipeline</td><td>A continuous delivery Svc for fast & reliable App updates.  See Also http://aws.amazon.com/codepipeline.</td></tr>
                <tr><td>AWS Cmd Line Intf (AWS CLI)</td><td>A unified downloadable & configurable tool for managing AWS Svcs. Control multiple AWS Svcs from the command line & automate them through scripts.  See Also http://aws.amazon.com/cli/.</td></tr>
                <tr><td>AWS Config</td><td>"A fully managed Svc that provides an AWS resource inventory, configuration history, & configuration change notifications for better security & governance. <br />
                You can create rules that automatically check the configuration of AWS resources that AWS Config records." See Also http://aws.amazon.com/config/.</td></tr>
                <tr><td>AWS DB Migration Svc</td><td>A web Svc that can help you migrate data to & from many widely used commercial & open-source DBs.  See Also http://aws.amazon.com/dms.</td></tr>
                <tr><td>AWS Data Pipeline</td><td>A web Svc for processing & moving data between different AWS compute & storage Svcs, as well as on-premises data sources, at specified intervals.  See Also http://aws.amazon.com/datapipeline.</td></tr>
                <tr><td>AWS Device Farm</td><td>An app testing Svc that allows developers to test Android, iOS, & Fire OS devices on real, physical phones & tablets that are hosted by AWS.  See Also http://aws.amazon.com/device-farm.</td></tr>
                <tr><td>AWS Direct Connect</td><td>A web Svc that simplifies establishing a dedicated network connection from your premises to AWS. Using AWS Direct Connect, you can establish private connectivity between AWS & your data center, office, or colocation environment.  See Also http://aws.amazon.com/directconnect.</td></tr>
                <tr><td>AWS Directory Svc</td><td>A managed Svc for connecting your AWS resources to an existing on-premises Microsoft Active Directory or to set up & operate a new, standalone directory in the AWS cloud.  See Also http://aws.amazon.com/directorySvc.</td></tr>
                <tr><td>AWS Elastic Beanstalk</td><td>A web Svc for deploying & managing Apps in the AWS cloud without worrying about the infrastructure that runs those Apps.  See Also http://aws.amazon.com/elasticbeanstalk.</td></tr>
                <tr><td>AWS GovCloud (US)</td><td>"An isolated AWS Region designed to host sensitive workloads in the cloud, ensuring that this work meets the US government's regulatory & compliance requirements. <br />
                The AWS GovCloud (US) Region adheres to United States International Traffic in Arms Regulations (ITAR), Federal Risk & Authorization Mgmt Program (FedRAMP) requirements, <br />
                Department of Defense (DOD) Cloud Security Requirements Guide (SRG) Levels 2 & 4, & Criminal Justice Information Svcs (CJIS) Security Policy requirements." See Also http://aws.amazon.com/govcloud-us/.</td></tr>
                <tr><td>AWS Identity & Access Mgmt (IAM)</td><td>A web Svc that enables Amzn Web Svcs (AWS) customers to manage users & user permissions within AWS.  See Also http://aws.amazon.com/iam.</td></tr>
                <tr><td>AWS Import/Export</td><td>A Svc for transferring large amounts of data between AWS & portable storage devices.  See Also http://aws.amazon.com/importexport.</td></tr>
                <tr><td>AWS IoT</td><td>A managed cloud platform that lets connected devices easily & securely interact with cloud Apps & other devices.  See Also http://aws.amazon.com/iot.</td></tr>
                <tr><td>AWS Key Mgmt Svc (AWS KMS)</td><td>A managed Svc that simplifies the creation & control of encryption keys that are used to encrypt data.  See Also http://aws.amazon.com/kms.</td></tr>
                <tr><td>AWS Lambda</td><td>"A web Svc that lets you run code without provisioning or managing servers. You can run code for virtually any type of App or back-end Svc with zero administration. <br />
                You can set up your code to automatically trigger from other AWS Svcs or call it directly from any web or mobile app." See Also http://aws.amazon.com/lambda/.</td></tr>
                <tr><td>AWS managed key</td><td>One of two types of customer master key (CMK)s in AWS Key Mgmt Svc (AWS KMS). </td></tr>
                <tr><td>AWS managed policy</td><td>An IAM managed policy that is created & managed by AWS.</td></tr>
                <tr><td>AWS Mgmt Console</td><td>A graphical interface to manage compute, storage, & other cloud resources.  See Also http://aws.amazon.com/console.</td></tr>
                <tr><td>AWS Mgmt Portal for vCenter</td><td>"A web Svc for managing your AWS resources using VMware vCenter. <br />
                You install the portal as a vCenter plug-in within your existing vCenter environment. Once installed, you can migrate VMware VMs to Amzn EC2 & manage AWS resources from within vCenter." See Also http://aws.amazon.com/ec2/vcenter-portal/.</td></tr>
                <tr><td>AWS Marketplace</td><td>"A web portal where qualified partners to market & sell their software to AWS customers. <br />
                AWS Marketplace is an online software store that helps customers find, buy, & immediately start using the software & Svcs that run on AWS." See Also http://aws.amazon.com/partners/aws-marketplace/.</td></tr>
                <tr><td>AWS Mobile Hub</td><td>An integrated console that for building, testing, & monitoring mobile apps.  See Also http://aws.amazon.com/mobile.</td></tr>
                <tr><td>AWS Mobile SDK</td><td>A software development kit whose libraries, code samples, & documentation help you build high quality mobile apps for the iOS, Android, Fire OS, Unity, & Xamarin platforms.  See Also http://aws.amazon.com/mobile/sdk.</td></tr>
                <tr><td>AWS OpsWorks</td><td>"A configuration Mgmt Svc that helps you use Chef to configure & operate groups of instances & Apps. <br />
                You can define the App’s architecture & the specification of each component including package installation, software configuration, & resources such as storage. <br />
                You can automate tasks based on time, load, lifecycle events, & more." See Also http://aws.amazon.com/opsworks/.</td></tr>
                <tr><td>AWS SDK for Go</td><td>A software development kit for integrating your Go App with the full suite of AWS Svcs.  See Also http://aws.amazon.com/sdk-for-go/.</td></tr>
                <tr><td>AWS SDK for Java</td><td>"A software development kit that provides Java APIs for many AWS Svcs including Amzn S3, Amzn EC2, Amzn DynamoDB, & more. <br />
                The single, downloadable package includes the AWS Java library, code samples, & documentation. " See Also http://aws.amazon.com/sdkforjava/.</td></tr>
                <tr><td>AWS SDK for JS in the Browser</td><td>"A software development kit for accessing AWS Svcs from JS code running in the browser. <br />
                Authenticate users through Facebook, Google, or Login with Amzn using web identity federation. Store App data in Amzn DynamoDB, & save user files to Amzn S3." See Also http://aws.amazon.com/sdk-for-browser/.</td></tr>
                <tr><td>AWS SDK for JS in Node.js</td><td>"A software development kit for accessing AWS Svcs from JS in Node.js. The SDK provides JS objects for AWS Svcs, including Amzn S3, Amzn EC2, Amzn DynamoDB, & Amzn Simple Workflow Svc (Amzn SWF) . <br />
                The single, downloadable package includes the AWS JS library & documentation." See Also http://aws.amazon.com/sdk-for-node-js/.</td></tr>
                <tr><td>AWS SDK for .NET</td><td>A software development kit that provides .NET API actions for AWS Svcs including Amzn S3, Amzn EC2, IAM, & more. You can download the SDK as multiple Svc-specific packages on NuGet.  See Also http://aws.amazon.com/sdkfornet/.</td></tr>
                <tr><td>AWS SDK for PHP</td><td>A software development kit & open-source PHP library for integrating your PHP App with AWS Svcs like Amzn S3, Amzn Glacier, & Amzn DynamoDB.  See Also http://aws.amazon.com/sdkforphp/.</td></tr>
                <tr><td>AWS SDK for Python (Boto)</td><td>A software development kit for using Python to access AWS Svcs like Amzn EC2, Amzn EMR, Auto Scaling, Amzn Kinesis, AWS Lambda, & more.  See Also http://boto.readthedocs.org/en/latest/.</td></tr>
                <tr><td>AWS SDK for Ruby</td><td>"A software development kit for accessing AWS Svcs from Ruby. The SDK provides Ruby classes for many AWS Svcs including Amzn S3, Amzn EC2, Amzn DynamoDB. & more. <br />
                The single downloadable package includes the AWS Ruby Library & documentation." See Also http://aws.amazon.com/sdkforruby/.</td></tr>
                <tr><td>AWS Security Token Svc (AWS STS)</td><td>A web Svc for requesting temporary, limited-privilege credentials for AWS Identity & Access Mgmt (IAM) users or for users that you authenticate (federated users).  See Also http://aws.amazon.com/iam/.</td></tr>
                <tr><td>AWS Svc Catalog</td><td>"A web Svc that helps organizations create & manage catalogs of IT Svcs that are approved for use on AWS. <br />
                These IT Svcs can include everything from virtual machine images, servers, software, & DBs to complete multitier App architectures." See Also http://aws.amazon.com/Svccatalog/.</td></tr>
                <tr><td>AWS Storage Gateway</td><td>A web Svc that connects an on-premises software appliance with cloud-based storage to provide seamless & secure integration between an organization’s on-premises IT environment & AWS’s storage infrastructure.  See Also http://aws.amazon.com/storagegateway/.</td></tr>
                <tr><td>AWS Toolkit for Eclipse</td><td>An open-source plug-in for the Eclipse Java IDE that makes it easier for developers to develop, debug, & deploy Java Apps using Amzn Web Svcs.  See Also http://aws.amazon.com/eclipse/.</td></tr>
                <tr><td>AWS Toolkit for Visual Studio</td><td>An extension for Microsoft Visual Studio that helps developers develop, debug, & deploy .NET Apps using Amzn Web Svcs.  See Also http://aws.amazon.com/visualstudio/.</td></tr>
                <tr><td>AWS Tools for Windows PowerShell</td><td>A set of PowerShell cmdlets to help developers & administrators manage their AWS Svcs from the Windows PowerShell scripting environment.  See Also http://aws.amazon.com/powershell/.</td></tr>
                <tr><td>AWS Trusted Advisor</td><td>A web Svc that inspects your AWS environment & makes recommendations for saving money, improving system availability & performance, & helping to close security gaps.  See Also http://aws.amazon.com/premiumsupport/trustedadvisor/.</td></tr>
                <tr><td>AWS VPN CloudHub</td><td>Enables secure communication between branch offices using a simple hub-and-spoke model, with or without a VPC.</td></tr>
                <tr><td>AWS WAF</td><td>"A web App firewall Svc that controls access to content by allowing or blocking web requests based on criteria that you specify, such as header values or the IP addresses that the requests originate from. <br />
                AWS WAF helps protect web Apps from common web exploits that could affect App availability, compromise security, or consume excessive resources." See Also http://aws.amazon.com/waf/.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: B</td><td>B</td></tr>
                <tr><td>basic monitoring</td><td>Monitoring of AWS-provided metrics derived at a 5-minute frequency.</td></tr>
                <tr><td>batch</td><td>See document batch.</td></tr>
                <tr><td>BGP ASN</td><td>Border Gateway Prot Autonomous System #. A unique identifier for a network, for use in BGP routing. Amzn EC2 supports all 2-byte ASN numbers in the range of 1 – 65335, with the exception of 7224, which is reserved.</td></tr>
                <tr><td>batch prediction</td><td>Amzn Machine Learning: An operation that processes multiple input data observations at one time (asynchronously). Unlike real-time predictions, batch predictions are not available until all predictions have been processed.  See Also real-time prediction.</td></tr>
                <tr><td>billing</td><td>See AWS Billing & Cost Mgmt.</td></tr>
                <tr><td>binary attribute</td><td>"Amzn Machine Learning: An attribute for which one of two possible values is possible. Valid positive values are 1, y, yes, t, & true answers. Valid negative values are 0, n, no, f, & false. <br />
                Amzn Machine Learning outputs 1 for positive values & 0 for negative values." See Also attribute.</td></tr>
                <tr><td>binary classification model</td><td>"Amzn Machine Learning: A machine learning model that predicts the answer to questions where the answer can be expressed as a binary variable. <br />
                EX, questions with answers of “1” or “0”, “yes” or “no”, “will click” or “will not click” are questions that have binary answers. <br />
                The result for a binary classification model is always either a “1” (for a “true” or affirmative answers) or a “0” (for a “false” or negative answers)."</td></tr>
                <tr><td></td><td>blacklist</td></tr>
                <tr><td></td><td>A list of IP addresses, email addresses, or domains that an Internet Svc provider suspects to be the source of spam. The ISP blocks incoming email from these addresses or domains.</td></tr>
                <tr><td></td><td>block</td></tr>
                <tr><td></td><td>A data set. Amzn EMR breaks large amounts of data into subsets. Each subset is called a data block. Amzn EMR assigns an ID to each block & uses a hash table to keep track of block processing.</td></tr>
                <tr><td></td><td>block device</td></tr>
                <tr><td></td><td>A storage device that supports reading & (optionally) writing data in fixed-size blocks, sectors, or clusters.</td></tr>
                <tr><td>block device mapping</td><td>A mapping structure for every AMI & instance that specifies the block devices attached to the instance.</td></tr>
                <tr><td>bootstrap action</td><td>A user-specified default or custom action that runs a script or an App on all nodes of a job flow before Hadoop starts.</td></tr>
                <tr><td>Border Gateway Prot Autonomous System #</td><td>See BGP ASN.</td></tr>
                <tr><td>bounce</td><td>A failed email delivery attempt.</td></tr>
                <tr><td>breach</td><td>"Auto Scaling: The condition in which a user-set threshold (upper or lower boundary) is passed. <br />
                If the duration of the breach is significant, as set by a breach duration parameter, it can possibly start a scaling activity. "</td></tr>
                <tr><td>bucket</td><td>"Amzn Simple Storage Svc (Amzn S3): A container for stored objects. Every object is contained in a bucket. <br />
                EX, if the object named photos/puppy.jpg is stored in the johnsmith bucket, then authorized users can access the object with the URL http://johnsmith.s3.amazonaws.com/photos/puppy.jpg."</td></tr>
                <tr><td>bucket owner</td><td>The person or organization that owns a bucket in Amzn S3. Just as Amzn is the only owner of the domain name Amzn.com, only one person or organization can own a bucket. </td></tr>
                <tr><td>bundling</td><td>A commonly used term for creating an Amzn Machine Image (AMI). It specifically refers to creating instance store-backed AMIs.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: C</td><td>C</td></tr>
                <tr><td>cache cluster</td><td>A logical cache distributed over multiple cache nodes. A cache cluster can be set up with a specific number of cache nodes.</td></tr>
                <tr><td>cache cluster identifier</td><td>Customer-supplied identifier for the cache cluster that must be unique for that customer in an AWS region.</td></tr>
                <tr><td>cache engine version</td><td>The version of the Memcached Svc that is running on the cache node.</td></tr>
                <tr><td>cache node</td><td>"A fixed-size chunk of secure, network-attached RAM. Each cache node runs an instance of the Memcached Svc, & has its own DNS name & port. <br />
                Multiple types of cache nodes are supported, each with varying amounts of associated memory."</td></tr>
                <tr><td>cache node type</td><td>An EC2 instance type used to run the cache node.</td></tr>
                <tr><td>cache parameter group</td><td>A container for cache engine parameter values that can be applied to one or more cache clusters.</td></tr>
                <tr><td>cache security group</td><td>A group maintained by ElastiCache that combines ingress authorizations to cache nodes for hosts belonging to Amzn EC2 security groups specified through the console or the API or command line tools.</td></tr>
                <tr><td>canned access policy</td><td>A standard access control policy that you can apply to a bucket or object. Options include: private, public-read, public-read-write, & authenticated-read.</td></tr>
                <tr><td>canonicalization</td><td>The process of converting data into a standard format that a Svc such as Amzn S3 can recognize.</td></tr>
                <tr><td>capacity</td><td>"The amount of available compute size at a given time. Each Auto Scaling group is defined with a minimum & maximum compute size. <br />
                A scaling activity increases or decreases the capacity within the defined minimum & maximum values."</td></tr>
                <tr><td>cartesian product processor</td><td>A processor that calculates a cartesian product. Also known as a cartesian data processor.</td></tr>
                <tr><td>cartesian product</td><td>A mathematical operation that returns a product from multiple sets.</td></tr>
                <tr><td>certificate</td><td>A credential that some AWS products use to authenticate AWS accounts & users. Also known as an X.509 certificate . The certificate is paired with a private key.</td></tr>
                <tr><td>chargeable resources</td><td>"Features or Svcs whose use incurs fees. Although some AWS products are free, others include charges. <br />
                EX, in an AWS CloudFormation stack, AWS resources that have been created incur charges. <br />
                The amount charged depends on the usage load. <br />
                Use the Amzn Web Svcs Simple Monthly Calculator at http://calculator.s3.amazonaws.com/calc5.html to estimate your cost prior to creating instances, stacks, or other resources."</td></tr>
                <tr><td>CIDR block</td><td>Classless Inter-Domain Routing. An Internet protocol address allocation & route aggregation methodology.  See Also Classless Inter-Domain Routing in Wikipedia.</td></tr>
                <tr><td>ciphertext</td><td>Information that has been encrypted, as opposed to plaintext, which is information that has not.</td></tr>
                <tr><td>ClassicLink</td><td>A feature for linking an EC2-Classic instance to a VPC, allowing your EC2-Classic instance to communicate with VPC instances using private IP addresses.  See Also link to VPC, unlink from VPC.</td></tr>
                <tr><td>classification</td><td>"In machine learning, a type of problem that seeks to place (classify) a data sample into a single category or “class.” <br />
                Often, classification problems are modeled to choose one category (class) out of two. These are binary classification problems. <br />
                Problems where more than two categories (classes) are available are called ""multiclass classification"" problems." See Also binary classification model, multiclass classification model.</td></tr>
                <tr><td>cloud Svc provider</td><td>A company that provides subscribers with access to Internet-hosted computing, storage, & software Svcs.</td></tr>
                <tr><td>CloudHub</td><td>See AWS VPN CloudHub.</td></tr>
                <tr><td>CLI</td><td>See AWS Cmd Line Intf (AWS CLI).</td></tr>
                <tr><td>cluster</td><td>A logical grouping of container instances that you can place tasks on. </td></tr>
                <tr><td></td><td>Amzn Elasticsearch Svc (Amzn ES): A logical grouping of one or more data nodes, optional dedicated master nodes, & storage required to run Amzn Elasticsearch Svc (Amzn ES) & operate your Amzn ES domain.  See Also data node, dedicated master node, node.</td></tr>
                <tr><td>cluster compute instance</td><td>A type of instance that provides a great amount of CPU power coupled with increased networking performance, making it well suited for High Performance Compute (HPC) Apps & other demanding network-bound Apps. </td></tr>
                <tr><td>cluster placement group</td><td>A logical cluster compute instance grouping to provide lower latency & high-bandwidth connectivity between the instances. </td></tr>
                <tr><td>cluster status</td><td>"Amzn Elasticsearch Svc (Amzn ES): An indicator of the health of a cluster. A status can be green, yellow, or red. <br />
                At the shard level, <br />
                green means that all shards are allocated to nodes in a cluster, <br />
                yellow means that the primary shard is allocated but the replica shards are not, & <br />
                red means that the primary & replica shards of at least one index are not allocated. <br />
                The shard status determines the index status, & the index status determines the cluster status. "</td></tr>
                <tr><td>CMK</td><td>See customer master key (CMK).</td></tr>
                <tr><td>CNAME</td><td>"Canonical Name Record. A type of resource record in the Domain Name System (DNS) that specifies that the domain name is an alias of another, canonical domain name. <br />
                More simply, it is an entry in a DNS table that lets you alias one fully qualified domain name to another. "</td></tr>
                <tr><td>complaint</td><td>The event in which a recipient who does not want to receive an email message clicks "Mark as Spam" within the email client, & the Internet Svc provider sends a notification to Amzn SES.</td></tr>
                <tr><td>compound query</td><td>Amzn CloudSearch: A search request that specifies multiple search criteria using the Amzn CloudSearch structured search syntax.</td></tr>
                <tr><td>condition</td><td>IAM: Any restriction or detail about a permission. The condition is D in the statement "A has permission to do B to C where D applies."</td></tr>
                <tr><td></td><td>"AWS WAF: A set of attributes that AWS WAF searches for in web requests to AWS resources such as Amzn CloudFront distributions. <br />
                Conditions can include values such as the IP addresses that web requests originate from or values in request headers. <br />
                Based on the specified conditions, you can configure AWS WAF to allow or block web requests to AWS resources."</td></tr>
                <tr><td>conditional parameter</td><td>See mapping.</td></tr>
                <tr><td>configuration API</td><td>Amzn CloudSearch: The API call that you use to create, configure, & manage search domains.</td></tr>
                <tr><td>configuration template</td><td>A series of key–value pairs that define parameters for various AWS products so that AWS Elastic Beanstalk can provision them for an environment.</td></tr>
                <tr><td>consistency model</td><td>The method a Svc uses to achieve high availability. EX, it could involve replicating data across multiple servers in a data center.  See Also eventual consistency.</td></tr>
                <tr><td>console</td><td>See AWS Mgmt Console.</td></tr>
                <tr><td>consolidated billing</td><td>"A feature of the AWS Billing & Cost Mgmt Svc for consolidating payment for multiple AWS accounts within your company by designating a single paying account. <br />
                You can see a combined view of AWS costs incurred by all accounts, as well as obtain a detailed cost report for each of the individual AWS accounts associated with your paying account. <br />
                Consolidated billing is offered at no additional charge."</td></tr>
                <tr><td>container</td><td>A Linux container that was created from a Docker image as part of a task. </td></tr>
                <tr><td>container definition</td><td>Specifies which Docker image to use for a container, how much CPU & memory the container is allocated, & more options. The container definition is included as part of a task definition.</td></tr>
                <tr><td>container instance</td><td>An EC2 instance that is running the Amzn EC2 Container Svc (Amzn ECS) agent & has been registered into a cluster. Amzn ECS tasks are placed on active container instances. </td></tr>
                <tr><td>container registry </td><td>Stores, manages, & deploys Docker images. </td></tr>
                <tr><td>continuous delivery</td><td>A software development practice in which code changes are automatically built, tested, & prepared for a release to production.  See Also http://aws.amazon.com/devops/continuous-delivery/.</td></tr>
                <tr><td>continuous integration</td><td>A software development practice in which developers regularly merge code changes into a central repository, after which automated builds & tests are run.  See Also http://aws.amazon.com/devops/continuous-integration/.</td></tr>
                <tr><td>cooldown period</td><td>Amount of time during which Auto Scaling does not allow the desired size of the Auto Scaling group to be changed by any other notification from an Amzn CloudWatch alarm.</td></tr>
                <tr><td>core node</td><td>"An EC2 instance that runs Hadoop map & reduce tasks & stores data using the Hadoop Distributed File System (HDFS). <br />
                Core nodes are managed by the master node, which assigns Hadoop tasks to nodes & monitors their status. <br />
                The EC2 instances you assign as core nodes are capacity that must be allotted for the entire job flow run. <br />
                Because core nodes store data, you can't remove them from a job flow. However, you can add more core nodes to a running job flow. "</td></tr>
                <tr><td></td><td>Core nodes run both the DataNodes & TaskTracker Hadoop daemons.</td></tr>
                <tr><td>corpus</td><td>Amzn CloudSearch: A collection of data that you want to search.</td></tr>
                <tr><td>credential helper</td><td>"AWS CodeCommit: A program that stores credentials for repositories & supplies them to Git when making connections to those repositories. <br />
                The AWS CLI includes a credential helper that you can use with Git when connecting to AWS CodeCommit repositories."</td></tr>
                <tr><td>credentials</td><td>"Also called access credentials or security credentials. In authentication & authorization, a system uses credentials to identify who is making a call & whether to allow the requested access. <br />
                In AWS, these credentials are typically the access key ID & the secret access key."</td></tr>
                <tr><td>cross-account access</td><td>"The process of permitting limited, controlled use of resources in one AWS account by a user in another AWS account. <br />
                EX, in AWS CodeCommit & AWS CodeDeploy you can configure cross-account access so that a user in AWS account A can access an AWS CodeCommit repository created by account B. <br />
                Or a pipeline in AWS CodePipeline created by account A can use AWS CodeDeploy resources created by account B. <br />
                In IAM you use a role to delegate temporary access to a user in one account to resources in another."</td></tr>
                <tr><td>cross-region replication</td><td>A client-side solution for maintaining identical copies of Amzn DynamoDB tables across different AWS regions, in near real time.</td></tr>
                <tr><td>customer gateway</td><td>"A router or software App on your side of a VPN tunnel that is managed by Amzn VPC. The internal interfaces of the customer gateway are attached to one or more devices in your home network. <br />
                The external interface is attached to the VPG across the VPN tunnel. "</td></tr>
                <tr><td>customer managed policy</td><td>An IAM managed policy that you create & manage in your AWS account.</td></tr>
                <tr><td>customer master key (CMK)</td><td>"The fundamental resource that AWS Key Mgmt Svc (AWS KMS) manages. CMKs can be either customer-managed keys or AWS-managed keys. <br />
                Use CMKs inside AWS KMS to encrypt or decrypt up to 4 kilobytes of data directly or to encrypt generated data keys, which are then used to encrypt or decrypt larger amounts of data outside of the Svc. "</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: D</td><td>D</td></tr>
                <tr><td>dashboard</td><td>See Svc health dashboard.</td></tr>
                <tr><td>data consistency</td><td>"A concept that describes when data is written or updated successfully & all copies of the data are updated in all AWS regions. <br />
                However, it takes time for the data to propagate to all storage locations. <br />
                To support varied App requirements, Amzn DynamoDB supports both eventually consistent & strongly consistent reads." See Also eventual consistency, eventually consistent read, strongly consistent read.</td></tr>
                <tr><td>data node</td><td>Amzn Elasticsearch Svc (Amzn ES): An Elasticsearch instance that holds data & responds to data upload requests.  See Also dedicated master node, node.</td></tr>
                <tr><td>data schema</td><td>See schema.</td></tr>
                <tr><td>data source</td><td>"The DB, file, or repository that provides information required by an App or DB. <br />
                EX, in AWS OpsWorks, valid data sources include an instance for a stack’s MySQL layer or a stack’s Amzn RDS Svc layer. <br />
                In Amzn Redshift , valid data sources include text files in an Amzn S3 bucket, in an Amzn EMR cluster, or on a remote host that a cluster can access through an SSH connection." See Also datasource.</td></tr>
                <tr><td>DB engine</td><td>The DB software & version running on the DB instance.</td></tr>
                <tr><td>DB name</td><td>The name of a DB hosted in a DB instance. A DB instance can host multiple DBs, but DBs hosted by the same DB instance must each have a unique name within that instance. </td></tr>
                <tr><td>datasource</td><td>"Amzn Machine Learning: An object that contains metadata about the input data. <br />
                Amzn ML reads the input data, computes descriptive statistics on its attributes, & stores the statistics—along with a schema & other information—as part of the datasource object. <br />
                Amzn ML uses datasources to train & evaluate a machine learning model & generate batch predictions." See Also data source.</td></tr>
                <tr><td>DB compute class</td><td>Size of the DB compute platform used to run the instance.</td></tr>
                <tr><td>DB instance</td><td>An isolated DB environment running in the cloud. A DB instance can contain multiple user-created DBs.</td></tr>
                <tr><td>DB instance identifier</td><td>User-supplied identifier for the DB instance. The identifier must be unique for that user in an AWS region.</td></tr>
                <tr><td>DB parameter group</td><td>A container for DB engine parameter values that apply to one or more DB instances.</td></tr>
                <tr><td>DB security group</td><td>"A method that controls access to the DB instance. By default, network access is turned off to DB instances. <br />
                After ingress is configured for a security group, the same rules apply to all DB instances associated with that group."</td></tr>
                <tr><td>DB snapshot</td><td>A user-initiated point backup of a DB instance.</td></tr>
                <tr><td>Dedicated Host</td><td>A physical server with EC2 instance capacity fully dedicated to a user.</td></tr>
                <tr><td>Dedicated Instance</td><td>An instance that is physically isolated at the host hardware level & launched within a VPC.</td></tr>
                <tr><td>dedicated master node</td><td>"Amzn Elasticsearch Svc (Amzn ES): An Elasticsearch instance that performs cluster Mgmt tasks, but does not hold data or respond to data upload requests. <br />
                Amzn Elasticsearch Svc (Amzn ES) uses dedicated master nodes to increase cluster stability. " See Also data node, node.</td></tr>
                <tr><td>Dedicated Reserved Instance</td><td>An option that you purchase to guarantee that sufficient capacity will be available to launch Dedicated Instances into a VPC. </td></tr>
                <tr><td>delegation</td><td>Within a single AWS account: Giving AWS users access to resources in your AWS account. </td></tr>
                <tr><td></td><td>Between two AWS accounts: Setting up a trust between the account that owns the resource (the trusting account), & the account that contains the users that need to access the resource (the trusted account).  See Also trust policy.</td></tr>
                <tr><td>delete marker</td><td>An object with a key & version ID, but without content. Amzn S3 inserts delete markers automatically into versioned buckets when an object is deleted.</td></tr>
                <tr><td>deliverability</td><td>The likelihood that an email message will arrive at its intended destination.</td></tr>
                <tr><td>deliveries</td><td>The number of email messages, sent through Amzn SES, that were accepted by an Internet Svc provider for delivery to recipients over a period of time.</td></tr>
                <tr><td>deny</td><td>"The result of a policy statement that includes deny as the effect, so that a specific action or actions are expressly forbidden for a user, group, or role. <br />
                Explicit deny take precedence over explicit allow. "</td></tr>
                <tr><td>deployment configuration</td><td>AWS CodeDeploy: A set of deployment rules & success & failure conditions used by the Svc during a deployment.</td></tr>
                <tr><td>deployment group</td><td>AWS CodeDeploy: A set of individually tagged instances, EC2 instances in Auto Scaling groups, or both.</td></tr>
                <tr><td>detailed monitoring</td><td>Monitoring of AWS-provided metrics derived at a 1-minute frequency.</td></tr>
                <tr><td>Description property</td><td>A property added to parameters, resources, resource properties, mappings, & outputs to help you to document AWS CloudFormation template elements.</td></tr>
                <tr><td>dimension</td><td>A name–value pair (for example, InstanceType=m1.small, or EngineName=mysql), that contains additional information to identify a metric.</td></tr>
                <tr><td>discussion forums</td><td>A place where AWS users can post technical questions & feedback to help accelerate their development efforts & to engage with the AWS community. The discussion forums are located at http://aws.amazon.com/forums/.</td></tr>
                <tr><td>distribution</td><td>A link between an origin server (such as an Amzn S3 bucket) & a domain name, which CloudFront automatically assigns. Through this link, CloudFront identifies the object you have stored in your origin server. </td></tr>
                <tr><td>DKIM</td><td>DomainKeys Identified Mail. A standard that email senders use to sign their messages. ISPs use those signatures to verify that messages are legitimate. For more information, see http://www.dkim.org.</td></tr>
                <tr><td>DNS</td><td>See Domain Name System.</td></tr>
                <tr><td>Docker image</td><td>A layered file system template that is the basis of a Docker container. Docker images can comprise specific operating systems or Apps. </td></tr>
                <tr><td>document</td><td>Amzn CloudSearch: An item that can be returned as a search result. Each document has a collection of fields that contain the data that can be searched or returned. The value of a field can be either a string or a number. Each document must have a unique ID & at least one field. </td></tr>
                <tr><td>document batch</td><td>Amzn CloudSearch: A collection of add & delete document operations. You use the document Svc API to submit batches to update the data in your search domain. </td></tr>
                <tr><td>document Svc API</td><td>Amzn CloudSearch: The API call that you use to submit document batches to update the data in a search domain.</td></tr>
                <tr><td>document Svc endpoint</td><td>Amzn CloudSearch: The URL that you connect to when sending document updates to an Amzn CloudSearch domain. Each search domain has a unique document Svc endpoint that remains the same for the life of the domain.</td></tr>
                <tr><td>domain</td><td>Amzn Elasticsearch Svc (Amzn ES): The hardware, software, & data exposed by Amzn Elasticsearch Svc (Amzn ES) endpoints. An Amzn ES domain is a Svc wrapper around an Elasticsearch cluster. An Amzn ES domain encapsulates the engine instances that process Amzn ES requests, the indexed data that you want to search, snapshots of the domain, access policies, & metadata.  See Also cluster, Elasticsearch.</td></tr>
                <tr><td>Domain Name System</td><td>A Svc that routes Internet traffic to websites by translating friendly domain names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other.</td></tr>
                <tr><td>Donation button</td><td>An HTML-coded button to provide an easy & secure way for US-based, IRS-certified 501(c)3 nonprofit organizations to solicit donations.</td></tr>
                <tr><td>DynamoDB stream</td><td>An ordered flow of information about changes to items in anAmzn DynamoDB table. When you enable a stream on a table, DynamoDB captures information about every modification to data items in the table.  See Also Amzn DynamoDB Streams.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: E</td><td>E</td></tr>
                <tr><td>EBS</td><td>See Amzn Elastic Block Store (Amzn EBS).</td></tr>
                <tr><td>EC2</td><td>See Amzn Elastic Compute Cloud (Amzn EC2).</td></tr>
                <tr><td>EC2 compute unit</td><td>An AWS standard for compute CPU & memory. You can use this measure to evaluate the CPU capacity of different EC2 instance types.</td></tr>
                <tr><td>EC2 instance</td><td>A compute instance in the Amzn EC2 Svc. Other AWS Svcs use the term EC2 instance to distinguish these instances from other types of instances they support.</td></tr>
                <tr><td>ECR</td><td>See Amzn EC2 Container Registry (Amzn ECR).</td></tr>
                <tr><td>ECS</td><td>See Amzn EC2 Container Svc (Amzn ECS).</td></tr>
                <tr><td>edge location</td><td>A site that CloudFront uses to cache copies of your content for faster delivery to users at any location. </td></tr>
                <tr><td>EFS</td><td>See Amzn Elastic File System (Amzn EFS).</td></tr>
                <tr><td>Elastic</td><td>A company that provides open-source solutions—including Elasticsearch, Logstash, Kibana, & Beats—that are designed to take data from any source & search, analyze, & visualize it in real time.</td></tr>
                <tr><td></td><td>Amzn Elasticsearch Svc (Amzn ES) is an AWS-managed Svc for deploying, operating, & scaling Elasticsearch in the AWS Cloud.  See Also Amzn Elasticsearch Svc (Amzn ES), Elasticsearch.</td></tr>
                <tr><td></td><td>Elastic Block Store</td></tr>
                <tr><td></td><td>See Amzn Elastic Block Store (Amzn EBS).</td></tr>
                <tr><td>Elastic IP address</td><td>A fixed (static) IP address that you have allocated in Amzn EC2 or Amzn VPC & then attached to an instance. Elastic IP addresses are associated with your account, not a specific instance. They are elastic because you can easily allocate, attach, detach, & free them as your needs change. Unlike traditional static IP addresses, Elastic IP addresses allow you to mask instance or Availability Zone failures by rapidly remapping your public IP addresses to another instance.</td></tr>
                <tr><td>Elastic Load Balancing</td><td>A web Svc that improves an App's availability by distributing incoming traffic between two or more EC2 instances.  See Also http://aws.amazon.com/elasticloadbalancing.</td></tr>
                <tr><td>elastic network interface</td><td>An additional network interface that can be attached to an instance. ENIs include a primary private IP address, one or more secondary private IP addresses, an elastic IP address (optional), a MAC address, membership in specified security groups, a description, & a source/destination check flag. You can create an ENI, attach it to an instance, detach it from an instance, & attach it to another instance. </td></tr>
                <tr><td>Elasticsearch</td><td>An open source, real-time distributed search & analytics engine used for full-text search, structured search, & analytics. Elasticsearch was developed by the Elastic company.</td></tr>
                <tr><td></td><td>Amzn Elasticsearch Svc (Amzn ES) is an AWS-managed Svc for deploying, operating, & scaling Elasticsearch in the AWS Cloud.  See Also Amzn Elasticsearch Svc (Amzn ES), Elastic.</td></tr>
                <tr><td>EMR</td><td>See Amzn EMR (Amzn EMR).</td></tr>
                <tr><td>encrypt</td><td>To use a mathematical algorithm to make data unintelligible to unauthorized users while allowing authorized users a method (such as a key or password) to convert the altered data back to its original state.</td></tr>
                <tr><td>encryption context</td><td>A set of key–value pairs that contains additional information associated with AWS Key Mgmt Svc (AWS KMS)–encrypted information.</td></tr>
                <tr><td>endpoint</td><td>A URL that identifies a host & port as the entry point for a web Svc. Every web Svc request contains an endpoint. Most AWS products provide regional endpoints to enable faster connectivity.</td></tr>
                <tr><td></td><td>Amzn ElastiCache: The DNS name of a cache node.</td></tr>
                <tr><td></td><td>Amzn RDS: The DNS name of a DB instance.</td></tr>
                <tr><td></td><td>AWS CloudFormation: The DNS name or IP address of the server that receives an HTTP request.</td></tr>
                <tr><td>endpoint port</td><td>Amzn ElastiCache: The port number used by a cache node.</td></tr>
                <tr><td></td><td>Amzn RDS: The port number used by a DB instance.</td></tr>
                <tr><td>envelope encryption</td><td>The use of a master key & a data key to algorithmically protect data. The master key is used to encrypt & decrypt the data key & the data key is used to encrypt & decrypt the data itself. </td></tr>
                <tr><td>environment</td><td>AWS Elastic Beanstalk: A specific running instance of an App. The App has a CNAME & includes an App version & a customizable configuration (which is inherited from the default container type).</td></tr>
                <tr><td>environment configuration</td><td>A collection of parameters & settings that define how an environment & its associated resources behave.</td></tr>
                <tr><td>ephemeral store</td><td>See instance store.</td></tr>
                <tr><td>epoch</td><td>The date from which time is measured. For most Unix environments, the epoch is January 1, 1970.</td></tr>
                <tr><td>evaluation</td><td>Amzn Machine Learning: The process of measuring the predictive performance of a machine learning (ML) model.</td></tr>
                <tr><td></td><td>Also a machine learning object that stores the details & result of an ML model evaluation.</td></tr>
                <tr><td>evaluation datasource</td><td>The data that Amzn Machine Learning uses to evaluate the predictive accuracy of a machine learning model.</td></tr>
                <tr><td>eventual consistency</td><td>The method through which AWS products achieve high availability, which involves replicating data across multiple servers in Amzn's data centers. When data is written or updated & Success is returned, all copies of the data are updated. However, it takes time for the data to propagate to all storage locations. The data will eventually be consistent, but an immediate read might not show the change. Consistency is usually reached within seconds.  See Also data consistency, eventually consistent read, strongly consistent read.</td></tr>
                <tr><td>eventually consistent read</td><td>A read process that returns data from only one region & might not show the most recent write information. However, if you repeat your read request after a short time, the response should eventually return the latest data.  See Also data consistency, eventual consistency, strongly consistent read.</td></tr>
                <tr><td>eviction</td><td>The deletion by CloudFront of an object from an edge location before its expiration time. If an object in an edge location isn't frequently requested, CloudFront might evict the object (remove the object before its expiration date) to make room for objects that are more popular. </td></tr>
                <tr><td>exbibyte</td><td>A contraction of exa binary byte, an exbibyte is 2^60 or 1,152,921,504,606,846,976 bytes. An exabyte (EB) is 10^18 or 1,000,000,000,000,000,000 bytes. 1,024 EiB is a zebibyte.</td></tr>
                <tr><td>expiration</td><td>For CloudFront caching, the time when CloudFront stops responding to user requests with an object. If you don't use headers or CloudFront distribution settings to specify how long you want objects to stay in an edge location, the objects expire after 24 hours. The next time a user requests an object that has expired, CloudFront forwards the request to the origin.</td></tr>
                <tr><td>explicit launch permission</td><td>An Amzn Machine Image (AMI) launch permission granted to a specific AWS account.</td></tr>
                <tr><td>exponential backoff</td><td>A strategy that incrementally increases the wait between retry attempts in order to reduce the load on the system & increase the likelihood that repeated requests will succeed. EX, client Apps might wait up to 400 milliseconds before attempting the first retry, up to 1600 milliseconds before the second, up to 6400 milliseconds (6.4 seconds) before the third, & so on.</td></tr>
                <tr><td>expression</td><td>Amzn CloudSearch: A numeric expression that you can use to control how search hits are sorted. You can construct Amzn CloudSearch expressions using numeric fields, other rank expressions, a document's default relevance score, & standard numeric operators & functions. When you use the sort option to specify an expression in a search request, the expression is evaluated for each search hit & the hits are listed according to their expression values.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: F</td><td>F</td></tr>
                <tr><td>facet</td><td>Amzn CloudSearch: An index field that represents a category that you want to use to refine & filter search results.</td></tr>
                <tr><td>facet enabled</td><td>Amzn CloudSearch: An index field option that enables facet information to be calculated for the field.</td></tr>
                <tr><td>FBL</td><td>See feedback loop.</td></tr>
                <tr><td>feature transformation</td><td>Amzn Machine Learning: The machine learning process of constructing more predictive input representations or “features” from the raw input variables to optimize a machine learning model’s ability to learn & generalize. Also known as data transformation or feature engineering.</td></tr>
                <tr><td>federated identity Mgmt</td><td>Allows individuals to sign in to different networks or Svcs, using the same group or personal credentials to access data across all networks. With identity federation in AWS, external identities (federated users) are granted secure access to resources in an AWS account without having to create IAM users. These external identities can come from a corporate identity store (such as LDAP or Windows Active Directory) or from a third party (such as Login with Amzn, Facebook, or Google). AWS federation also supports SAML 2.0.</td></tr>
                <tr><td>federated user</td><td>See federated identity Mgmt.</td></tr>
                <tr><td>federation</td><td>See federated identity Mgmt.</td></tr>
                <tr><td>feedback loop</td><td>The mechanism by which a mailbox provider (for example, an Internet Svc provider) forwards a recipient's complaint back to the sender.</td></tr>
                <tr><td>field weight</td><td>The relative importance of a text field in a search index. Field weights control how much matches in particular text fields affect a document's relevance score.</td></tr>
                <tr><td>filter</td><td>A criterion that you specify to limit the results when you list or describe your Amzn EC2 resources.</td></tr>
                <tr><td>filter query</td><td>A way to filter search results without affecting how the results are scored & sorted. Specified with the Amzn CloudSearch fq parameter. </td></tr>
                <tr><td>FIM</td><td>See federated identity Mgmt.</td></tr>
                <tr><td>Firehose</td><td>See Amzn Kinesis Firehose.</td></tr>
                <tr><td>format version</td><td>See template format version.</td></tr>
                <tr><td>forums</td><td>See discussion forums.</td></tr>
                <tr><td>function</td><td>See intrinsic function.</td></tr>
                <tr><td>fuzzy search</td><td>A simple search query that uses approximate string matching (fuzzy matching) to correct for typographical errors & misspellings.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: G</td><td>G</td></tr>
                <tr><td>geospatial search</td><td>A search query that uses locations specified as a latitude & longitude to determine matches & sort the results. </td></tr>
                <tr><td>gibibyte</td><td>A contraction of giga binary byte, a gibibyte is 2^30 or 1,073,741,824 bytes. A gigabyte (GB) is 10^9 or 1,000,000,000 bytes. 1,024 GiB is a tebibyte.</td></tr>
                <tr><td>global secondary index</td><td>An index with a partition key & a sort key that can be different from those on the table. A global secondary index is considered global because queries on the index can span all of the data in a table, across all partitions.  See Also local secondary index.</td></tr>
                <tr><td>grant</td><td>AWS Key Mgmt Svc (AWS KMS): A mechanism for giving AWS principals long-term permissions to use customer master key (CMK)s.</td></tr>
                <tr><td>grant token</td><td>A type of identifier that allows the permissions in a grant to take effect immediately.</td></tr>
                <tr><td>ground truth</td><td>The observations used in the machine learning (ML) model training process that include the correct value for the target attribute. To train an ML model to predict house sales prices, the input observations would typically include prices of previous house sales in the area. The sale prices of these houses constitute the ground truth.</td></tr>
                <tr><td>group</td><td>A collection of IAM users. You can use IAM groups to simplify specifying & managing permissions for multiple users.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: H</td><td>H</td></tr>
                <tr><td>Hadoop</td><td>Software that enables distributed processing for big data by using clusters & simple programming models. For more information, see http://hadoop.apache.org.</td></tr>
                <tr><td>hard bounce</td><td>A persistent email delivery failure such as "mailbox does not exist."</td></tr>
                <tr><td>hardware VPN</td><td>A hardware-based IPsec VPN connection over the Internet.</td></tr>
                <tr><td>health check</td><td>A system call to check on the health status of each instance in an Auto Scaling group.</td></tr>
                <tr><td>high-quality email</td><td>Email that recipients find valuable & want to receive. Value means different things to different recipients & can come in the form of offers, order confirmations, receipts, newsletters, etc.</td></tr>
                <tr><td>highlights</td><td>Amzn CloudSearch: Excerpts returned with search results that show where the search terms appear within the text of the matching documents.</td></tr>
                <tr><td>highlight enabled</td><td>Amzn CloudSearch: An index field option that enables matches within the field to be highlighted.</td></tr>
                <tr><td>hit</td><td>A document that matches the criteria specified in a search request. Also referred to as a search result.</td></tr>
                <tr><td>HMAC</td><td>Hash-based Message Authentication Code. A specific construction for calculating a message authentication code (MAC) involving a cryptographic hash function in combination with a secret key. You can use it to verify both the data integrity & the authenticity of a message at the same time. AWS calculates the HMAC using a standard, cryptographic hash algorithm, such as SHA-256. </td></tr>
                <tr><td>hosted zone</td><td>A collection of resource record sets that Amzn Route 53 hosts. Like a traditional DNS zone file, a hosted zone represents a collection of records that are managed together under a single domain name.</td></tr>
                <tr><td>HVM virtualization</td><td>Hardware Virtual Machine virtualization. Allows the guest VM to run as though it is on a native hardware platform, except that it still uses paravirtual (PV) network & storage drivers for improved performance.  See Also PV virtualization.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: I</td><td>I</td></tr>
                <tr><td>IAM</td><td>See AWS Identity & Access Mgmt (IAM).</td></tr>
                <tr><td>IAM group</td><td>See group.</td></tr>
                <tr><td>IAM policy simulator</td><td>See policy simulator.</td></tr>
                <tr><td>IAM role</td><td>See role.</td></tr>
                <tr><td>IAM user</td><td>See user.</td></tr>
                <tr><td>Identity & Access Mgmt</td><td>See AWS Identity & Access Mgmt (IAM).</td></tr>
                <tr><td>identity provider (IdP) </td><td>An IAM entity that holds metadata about external identity providers.</td></tr>
                <tr><td>IdP</td><td>See identity provider (IdP) .</td></tr>
                <tr><td>image</td><td>See Amzn Machine Image (AMI).</td></tr>
                <tr><td>import/export station</td><td>A machine that uploads or downloads your data to or from Amzn S3.</td></tr>
                <tr><td>import log</td><td>A report that contains details about how AWS Import/Export processed your data.</td></tr>
                <tr><td>index</td><td>See search index.</td></tr>
                <tr><td>index field</td><td>A name–value pair that is included in an Amzn CloudSearch domain's index. An index field can contain text or numeric data, dates, or a location. </td></tr>
                <tr><td>indexing options</td><td>Configuration settings that define an Amzn CloudSearch domain's index fields, how document data is mapped to those index fields, & how the index fields can be used. </td></tr>
                <tr><td>inline policy</td><td>An IAM policy that is embedded in a single IAM user, group, or role.</td></tr>
                <tr><td>input data</td><td>Amzn Machine Learning: The observations that you provide to Amzn Machine Learning to train & evaluate a machine learning model & generate predictions.</td></tr>
                <tr><td>instance</td><td>A copy of an Amzn Machine Image (AMI) running as a virtual server in the AWS cloud.</td></tr>
                <tr><td>instance family</td><td>A general instance type grouping using either storage or CPU capacity. </td></tr>
                <tr><td>instance group</td><td>A Hadoop cluster contains one master instance group that contains one master node, a core instance group containing one or more core node & an optional task node instance group, which can contain any number of task nodes. </td></tr>
                <tr><td>instance profile</td><td>A container that passes IAM role information to an EC2 instance at launch.</td></tr>
                <tr><td>instance store</td><td>Disk storage that is physically attached to the host computer for an EC2 instance, & therefore has the same lifespan as the instance. When the instance is terminated, you lose any data in the instance store. </td></tr>
                <tr><td>instance store-backed AMI</td><td>A type of Amzn Machine Image (AMI) whose instances use an instance store volume as the root device. Compare this with instances launched from Amzn EBS-backed AMIs, which use an Amzn EBS volume as the root device.</td></tr>
                <tr><td>instance type</td><td>A specification that defines the memory, CPU, storage capacity, & hourly cost for an instance. Some instance types are designed for standard Apps, whereas others are designed for CPU-intensive, memory-intensive Apps, & so on. </td></tr>
                <tr><td>Internet gateway</td><td>Connects a network to the Internet. You can route traffic for IP addresses outside your VPC to the Internet gateway. </td></tr>
                <tr><td>Internet Svc provider</td><td>A company that provides subscribers with access to the Internet. Many ISPs are also mailbox providers. Mailbox providers are sometimes referred to as ISPs, even if they only provide mailbox Svcs.</td></tr>
                <tr><td>intrinsic function</td><td>A special action in a AWS CloudFormation template that assigns values to properties not available until runtime. These functions follow the format Fn::Attribute, such as Fn::GetAtt. Arguments for intrinsic functions can be parameters, pseudo parameters, or the output of other intrinsic functions.</td></tr>
                <tr><td>IP address</td><td>A numerical address (for example, 192.0.2.44) that networked devices use to communicate with one another using the Internet Prot (IP). All EC2 instances are assigned two IP addresses at launch, which are directly mapped to each other through network address translation (NAT): a private IP address (following RFC 1918) & a public IP address. Instances launched in a VPC are assigned only a private IP address. Instances launched in your default VPC are assigned both a private IP address & a public IP address.</td></tr>
                <tr><td>IP match condition</td><td>AWS WAF: An attribute that specifies the IP addresses or IP address ranges that web requests originate from. Based on the specified IP addresses, you can configure AWS WAF to allow or block web requests to AWS resources such as Amzn CloudFront distributions.</td></tr>
                <tr><td>ISP</td><td>See Internet Svc provider.</td></tr>
                <tr><td>issuer</td><td>The person who writes a policy to grant permissions to a resource. The issuer (by definition) is always the resource owner. AWS does not permit Amzn SQS users to create policies for resources they don't own. If John is the resource owner, AWS authenticates John's identity when he submits the policy he's written to grant permissions for that resource.</td></tr>
                <tr><td>item</td><td>A group of attributes that is uniquely identifiable among all of the other items. Items in Amzn DynamoDB are similar in many ways to rows, records, or tuples in other DB systems.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: J</td><td>J</td></tr>
                <tr><td>job flow</td><td>Amzn EMR: One or more steps that specify all of the functions to be performed on the data.</td></tr>
                <tr><td>job ID</td><td>A five-character, alphanumeric string that uniquely identifies an AWS Import/Export storage device in your shipment. AWS issues the job ID in response to a CREATE JOB email command. </td></tr>
                <tr><td>job prefix</td><td>An optional string that you can add to the beginning of an AWS Import/Export log file name to prevent collisions with objects of the same name.  See Also key prefix.</td></tr>
                <tr><td>JSON</td><td>JS Object Notation. A lightweight data interchange format. For information about JSON, see http://www.json.org/.</td></tr>
                <tr><td>junk folder</td><td>The location where email messages that various filters determine to be of lesser value are collected so that they do not arrive in the recipient's inbox but are still accessible to the recipient. This is also referred to as a spam or bulk folder.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: K</td><td>K</td></tr>
                <tr><td>key</td><td>A credential that identifies an AWS account or user to AWS (such as the AWS secret access key).</td></tr>
                <tr><td></td><td>Amzn Simple Storage Svc (Amzn S3), Amzn EMR (Amzn EMR): The unique identifier for an object in a bucket. Every object in a bucket has exactly one key. Because a bucket & key together uniquely identify each object, you can think of Amzn S3 as a basic data map between the bucket + key, & the object itself. You can uniquely address every object in Amzn S3 through the combination of the web Svc endpoint, bucket name, & key, as in this example: http://doc.s3.amazonaws.com/2006-03-01/AmznS3.wsdl, where doc is the name of the bucket, & 2006-03-01/AmznS3.wsdl is the key.</td></tr>
                <tr><td></td><td>AWS Import/Export: The name of an object in Amzn S3. It is a sequence of Unicode characters whose UTF-8 encoding cannot exceed 1024 bytes. If a key, for example, logPrefix + import-log-JOBID, is longer than 1024 bytes, AWS Elastic Beanstalk returns an InvalidManifestField error. </td></tr>
                <tr><td></td><td>IAM: In a policy, a specific characteristic that is the basis for restricting access (such as the current time, or the IP address of the requester).</td></tr>
                <tr><td></td><td>Tagging resources: A general tag label that acts like a category for more specific tag values. EX, you might have EC2 instance with the tag key of Owner & the tag value of Jan. You can tag an AWS resource with up to 10 key–value pairs. Not all AWS resources can be tagged.</td></tr>
                <tr><td>key pair</td><td>A set of security credentials that you use to prove your identity electronically. A key pair consists of a private key & a public key.</td></tr>
                <tr><td>key prefix</td><td>A logical grouping of the objects in a bucket. The prefix value is similar to a directory name that enables you to store similar data under the same directory in a bucket.</td></tr>
                <tr><td>kibibyte</td><td>A contraction of kilo binary byte, a kibibyte is 2^10 or 1,024 bytes. A kilobyte (KB) is 10^3 or 1,000 bytes. 1,024 KiB is a mebibyte.</td></tr>
                <tr><td>KMS</td><td>See AWS Key Mgmt Svc (AWS KMS).</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: L</td><td>L</td></tr>
                <tr><td>labeled data</td><td>In machine learning, data for which you already know the target or “correct” answer.</td></tr>
                <tr><td>launch configuration</td><td>A set of descriptive parameters used to create new EC2 instances in an Auto Scaling activity. </td></tr>
                <tr><td></td><td>A template that an Auto Scaling group uses to launch new EC2 instances. The launch configuration contains information such as the Amzn Machine Image (AMI) ID, the instance type, key pairs, security groups, & block device mappings, among other configuration settings.</td></tr>
                <tr><td>launch permission</td><td>An Amzn Machine Image (AMI) attribute that allows users to launch an AMI. </td></tr>
                <tr><td>lifecycle</td><td>The lifecycle state of the EC2 instance contained in an Auto Scaling group. EC2 instances progress through several states over their lifespan; these include Pending, InSvc, Terminating & Terminated. </td></tr>
                <tr><td>lifecycle action</td><td>An action that can be paused by Auto Scaling, such as launching or terminating an EC2 instance.</td></tr>
                <tr><td>lifecycle hook</td><td>Enables you to pause Auto Scaling after it launches or terminates an EC2 instance so that you can perform a custom action while the instance is not in Svc.</td></tr>
                <tr><td>link to VPC</td><td>The process of linking (or attaching) an EC2-Classic instance to a ClassicLink-enabled VPC.  See Also ClassicLink, unlink from VPC.</td></tr>
                <tr><td>load balancer</td><td>A DNS name combined with a set of ports, which together provide a destination for all requests intended for your App. A load balancer can distribute traffic to multiple App instances across every Availability Zone within a region. Load balancers can span multiple Availability Zones within an Amzn EC2 region, but they cannot span multiple regions. </td></tr>
                <tr><td>local secondary index</td><td>An index that has the same partition key as the table, but a different sort key. A local secondary index is local in the sense that every partition of a local secondary index is scoped to a table partition that has the same partition key value.  See Also local secondary index.</td></tr>
                <tr><td>logical name</td><td>A case-sensitive unique string within an AWS CloudFormation template that identifies a resource, mapping, parameter, or output. In an AWS CloudFormation template, each parameter, resource, property, mapping, & output must be declared with a unique logical name. You use the logical name when dereferencing these items using the Ref function.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: M</td><td>M</td></tr>
                <tr><td>Mail Transfer Agent (MTA)</td><td>Software that transports email messages from one computer to another by using a client-server architecture.</td></tr>
                <tr><td>mailbox provider</td><td>An organization that provides email mailbox hosting Svcs. Mailbox providers are sometimes referred to as Internet Svc providers, even if they only provide mailbox Svcs.</td></tr>
                <tr><td>mailbox simulator</td><td>A set of email addresses that you can use to test an Amzn SES-based email sending App without sending messages to actual recipients. Each email address represents a specific scenario (such as a bounce or complaint) & generates a typical response that is specific to the scenario.</td></tr>
                <tr><td>main route table</td><td>The default route table that any new VPC subnet uses for routing. You can associate a subnet with a different route table of your choice. You can also change which route table is the main route table.</td></tr>
                <tr><td>managed policy</td><td>A standalone IAM policy that you can attach to multiple users, groups, & roles in your IAM account. Managed policies can either be AWS managed policies (which are created & managed by AWS) or customer managed policies (which you create & manage in your AWS account).</td></tr>
                <tr><td>manifest</td><td>When sending a create job request for an import or export operation, you describe your job in a text file called a manifest. The manifest file is a YAML-formatted file that specifies how to transfer data between your storage device & the AWS cloud.</td></tr>
                <tr><td>manifest file</td><td>Amzn Machine Learning: The file used for describing batch predictions. The manifest file relates each input data file with its associated batch prediction results. It is stored in the Amzn S3 output location.</td></tr>
                <tr><td>mapping</td><td>A way to add conditional parameter values to an AWS CloudFormation template. You specify mappings in the template's optional Mappings section & retrieve the desired value using the FN::FindInMap function.</td></tr>
                <tr><td>marker</td><td>See pagination token.</td></tr>
                <tr><td>master node</td><td>A process running on an Amzn Machine Image (AMI) that keeps track of the work its core & task nodes complete. </td></tr>
                <tr><td>maximum price</td><td>The maximum price you will pay to launch one or more Spot Instances. If your maximum price exceeds the current Spot price & your restrictions are met, Amzn EC2 launches instances on your behalf. </td></tr>
                <tr><td>maximum send rate</td><td>The maximum number of email messages that you can send per second using Amzn SES.</td></tr>
                <tr><td>mebibyte</td><td>A contraction of mega binary byte, a mebibyte is 2^20 or 1,048,576 bytes. A megabyte (MB) is 10^6 or 1,000,000 bytes. 1,024 MiB is a gibibyte.</td></tr>
                <tr><td>member resources</td><td>See resource.</td></tr>
                <tr><td>message ID</td><td>Amzn Simple Email Svc (Amzn SES): A unique identifier that is assigned to every email message that is sent.</td></tr>
                <tr><td></td><td>Amzn Simple Queue Svc (Amzn SQS): The identifier returned when you send a message to a queue.</td></tr>
                <tr><td>metadata</td><td>Information about other data or objects. In Amzn Simple Storage Svc (Amzn S3) & Amzn EMR (Amzn EMR) metadata takes the form of name–value pairs that describe the object. These include default metadata such as the date last modified & standard HTTP metadata such as Content-Type. Users can also specify custom metadata at the time they store an object. In Amzn Elastic Compute Cloud (Amzn EC2) metadata includes data about an EC2 instance that the instance can retrieve to determine things about itself, such as the instance type, the IP address, & so on.</td></tr>
                <tr><td>metric</td><td>An element of time-series data defined by a unique combination of exactly one namespace, exactly one metric name, & between zero & ten dimensions. Metrics & the statistics derived from them are the basis of Amzn CloudWatch.</td></tr>
                <tr><td>metric name</td><td>The primary identifier of a metric, used in combination with a namespace & optional dimensions.</td></tr>
                <tr><td>MFA</td><td>See multi-factor authentication (MFA).</td></tr>
                <tr><td>micro instance</td><td>A type of EC2 instance that is more economical to use if you have occasional bursts of high CPU activity.</td></tr>
                <tr><td>MIME</td><td>See Multipurpose Internet Mail Extensions (MIME).</td></tr>
                <tr><td>ML model</td><td>In machine learning (ML), a mathematical model that generates predictions by finding patterns in data. Amzn Machine Learning supports three types of ML models: binary classification, multiclass classification, & regression. Also known as a predictive model.  See Also binary classification model, multiclass classification model, regression model.</td></tr>
                <tr><td>MTA</td><td>See Mail Transfer Agent (MTA).</td></tr>
                <tr><td>Multi-AZ deployment</td><td>A primary DB instance that has a synchronous standby replica in a different Availability Zone. The primary DB instance is synchronously replicated across Availability Zones to the standby replica.</td></tr>
                <tr><td>multiclass classification model</td><td>A machine learning model that predicts values that belong to a limited, pre-defined set of permissible values. EX, "Is this product a book, movie, or clothing?"</td></tr>
                <tr><td>multi-factor authentication (MFA)</td><td>An optional AWS account security feature. Once you enable AWS MFA, you must provide a six-digit, single-use code in addition to your sign-in credentials whenever you access secure AWS webpages or the AWS Mgmt Console. You get this single-use code from an authentication device that you keep in your physical possession.  See Also http://aws.amazon.com/mfa/.</td></tr>
                <tr><td>multi-valued attribute</td><td>An attribute with more than one value.</td></tr>
                <tr><td>multipart upload</td><td>A feature that allows you to upload a single object as a set of parts.</td></tr>
                <tr><td>Multipurpose Internet Mail Extensions (MIME)</td><td>An Internet standard that extends the email protocol to include non-ASCII text & nontext elements like attachments.</td></tr>
                <tr><td>Multitool</td><td>A cascading App that provides a simple command-line interface for managing large datasets. </td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: N</td><td>N</td></tr>
                <tr><td>namespace</td><td>An abstract container that provides context for the items (names, or technical terms, or words) it holds, & allows disambiguation of homonym items residing in different namespaces.</td></tr>
                <tr><td>NAT</td><td>Ntwk address translation. A strategy of mapping one or more IP addresses to another while data packets are in transit across a traffic routing device. This is commonly used to restrict Internet communication to private instances while allowing outgoing traffic.  See Also Ntwk Addr Translation & Prot Translation, NAT gateway, NAT instance.</td></tr>
                <tr><td>NAT gateway</td><td>A NAT device, managed by AWS, that performs network address translation in a private subnet, to secure inbound Internet traffic. A NAT gateway uses both NAT & port address translation.  See Also NAT instance.</td></tr>
                <tr><td>NAT instance</td><td>A NAT device, configured by a user, that performs network address translation in a VPC public subnet to secure inbound Internet traffic.  See Also NAT gateway.</td></tr>
                <tr><td>network ACL</td><td>An optional layer of security that acts as a firewall for controlling traffic in & out of a subnet. You can associate multiple subnets with a single network ACL, but a subnet can be associated with only one network ACL at a time.</td></tr>
                <tr><td>Ntwk Addr Translation & Prot Translation</td><td>(NAT-PT) An Internet protocol standard defined in RFC 2766.  See Also NAT instance, NAT gateway.</td></tr>
                <tr><td>n-gram processor</td><td>A processor that performs n-gram transformations.  See Also n-gram transformation.</td></tr>
                <tr><td>n-gram transformation</td><td>Amzn Machine Learning: A transformation that aids in text string analysis. An n-gram transformation takes a text variable as input & outputs strings by sliding a window of size n words, where n is specified by the user, over the text, & outputting every string of words of size n & all smaller sizes. EX, specifying the n-gram transformation with window size =2 returns all the two-word combinations & all of the single words.</td></tr>
                <tr><td>node</td><td>Amzn Elasticsearch Svc (Amzn ES): An Elasticsearch instance. A node can be either a data instance or a dedicated master instance.  See Also dedicated master node.</td></tr>
                <tr><td>NoEcho</td><td>A property of AWS CloudFormation parameters that prevent the otherwise default reporting of names & values of a template parameter. Declaring the NoEcho property causes the parameter value to be masked with asterisks in the report by the cfn-describe-stacks command.</td></tr>
                <tr><td>NoSQL</td><td>Nonrelational DB systems that are highly available, scalable, & optimized for high performance. Instead of the relational model, NoSQL DBs (like Amzn DynamoDB) use alternate models for data Mgmt, such as key–value pairs or document storage. </td></tr>
                <tr><td>null object</td><td>A null object is one whose version ID is null. Amzn S3 adds a null object to a bucket when versioning for that bucket is suspended. It is possible to have only one null object for each key in a bucket.</td></tr>
                <tr><td>number of passes</td><td>The number of times that you allow Amzn Machine Learning to use the same data records to train a machine learning model.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: O</td><td>O</td></tr>
                <tr><td>object</td><td>Amzn Simple Storage Svc (Amzn S3): The fundamental entity type stored in Amzn S3. Objects consist of object data & metadata. The data portion is opaque to Amzn S3.</td></tr>
                <tr><td></td><td>Amzn CloudFront: Any entity that can be served either over HTTP or a version of RTMP.</td></tr>
                <tr><td>observation</td><td>Amzn Machine Learning: A single instance of data that Amzn Machine Learning (Amzn ML) uses to either train a machine learning model how to predict or to generate a prediction. Each row in an Amzn ML input data file is an observation.</td></tr>
                <tr><td>On-Demand Instance</td><td>An Amzn EC2 pricing option that charges you for compute capacity by the hour with no long-term commitment.</td></tr>
                <tr><td>operation</td><td>An API function. Also called an action.</td></tr>
                <tr><td>optimistic locking</td><td>A strategy to ensure that an item that you want to update has not been modified by others before you perform the update. For Amzn DynamoDB, optimistic locking support is provided by the AWS SDKs.</td></tr>
                <tr><td>origin access identity</td><td>Also called OAI. When using Amzn CloudFront to serve content with an Amzn S3 bucket as the origin, a virtual identity that you use to require users to access your content through CloudFront URLs instead of Amzn S3 URLs. Usually used with CloudFront private content. </td></tr>
                <tr><td>origin server</td><td>The Amzn S3 bucket or custom origin containing the definitive original version of the content you deliver through CloudFront.</td></tr>
                <tr><td>OSB transformation</td><td>Orthogonal sparse bigram transformation. In machine learning, a transformation that aids in text string analysis & that is an alternative to the n-gram transformation. OSB transformations are generated by sliding the window of size n words over the text, & outputting every pair of words that includes the first word in the window.  See Also n-gram transformation.</td></tr>
                <tr><td>output location</td><td>Amzn Machine Learning: An Amzn S3 location where the results of a batch prediction are stored.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: P</td><td>P</td></tr>
                <tr><td>pagination</td><td>The process of responding to an API request by returning a large list of records in small separate parts. Pagination can occur in the following situations:</td></tr>
                <tr><td></td><td>- The client sets the maximum number of returned records to a value below the total number of records.</td></tr>
                <tr><td></td><td>- The Svc has a default maximum number of returned records that is lower than the total number of records.</td></tr>
                <tr><td></td><td>When an API response is paginated, the Svc sends a subset of the large list of records & a pagination token that indicates that more records are available. The client includes this pagination token in a subsequent API request, & the Svc responds with the next subset of records. This continues until the Svc responds with a subset of records & no pagination token, indicating that all records have been sent. </td></tr>
                <tr><td>pagination token</td><td>A marker that indicates that an API response contains a subset of a larger list of records. The client can return this marker in a subsequent API request to retrieve the next subset of records until the Svc responds with a subset of records & no pagination token, indicating that all records have been sent.  See Also pagination.</td></tr>
                <tr><td>paid AMI</td><td>An Amzn Machine Image (AMI) that you sell to other Amzn EC2 users on AWS Marketplace.</td></tr>
                <tr><td>paravirtual virtualization</td><td>See PV virtualization.</td></tr>
                <tr><td>part</td><td>A contiguous portion of the object's data in a multipart upload request.</td></tr>
                <tr><td>partition key</td><td>A simple primary key, composed of one attribute (also known as a hash attribute).  See Also partition key, sort key.</td></tr>
                <tr><td>PAT</td><td>Port address translation. </td></tr>
                <tr><td>pebibyte</td><td>A contraction of peta binary byte, a pebibyte is 2^50 or 1,125,899,906,842,624 bytes. A petabyte (PB) is 10^15 or 1,000,000,000,000,000 bytes. 1,024 PiB is an exbibyte.</td></tr>
                <tr><td>period</td><td>See sampling period.</td></tr>
                <tr><td>permission</td><td>A statement within a policy that allows or denies access to a particular resource. You can state any permission like this: "A has permission to do B to C." EX, Jane (A) has permission to read messages (B) from John's Amzn SQS queue (C). Whenever Jane sends a request to Amzn SQS to use John's queue, the Svc checks to see if she has permission & if the request satisfies the conditions John set forth in the permission.</td></tr>
                <tr><td>persistent storage</td><td>A data storage solution where the data remains intact until it is deleted. Options within AWS include: Amzn S3, Amzn RDS, Amzn DynamoDB, & other Svcs.</td></tr>
                <tr><td>physical name</td><td>A unique label that AWS CloudFormation assigns to each resource when creating a stack. Some AWS CloudFormation commands accept the physical name as a value with the --physical-name parameter.</td></tr>
                <tr><td>pipeline</td><td>AWS CodePipeline: A workflow construct that defines the way software changes go through a release process.</td></tr>
                <tr><td>plaintext</td><td>Information that has not been encrypted, as opposed to ciphertext.</td></tr>
                <tr><td>policy</td><td>IAM: A document defining permissions that apply to a user, group, or role; the permissions in turn determine what users can do in AWS. A policy typically allows access to specific actions, & can optionally grant that the actions are allowed for specific resources, like EC2 instances, Amzn S3 buckets, & so on. Policies can also explicitly deny access.</td></tr>
                <tr><td></td><td>Auto Scaling: An object that stores the information needed to launch or terminate instances for an Auto Scaling group. Executing the policy causes instances to be launched or terminated. You can configure an alarm to invoke an Auto Scaling policy.</td></tr>
                <tr><td>policy generator</td><td>A tool in the IAM AWS Mgmt Console that helps you build a policy by selecting elements from lists of available options. </td></tr>
                <tr><td>policy simulator</td><td>A tool in the IAM AWS Mgmt Console that helps you test & troubleshoot policies so you can see their effects in real-world scenarios. </td></tr>
                <tr><td>policy validator</td><td>A tool in the IAM AWS Mgmt Console that examines your existing IAM access control policies to ensure that they comply with the IAM policy grammar.</td></tr>
                <tr><td>presigned URL</td><td>A web address that uses query string authentication. </td></tr>
                <tr><td>prefix</td><td>See job prefix.</td></tr>
                <tr><td>Premium Support</td><td>A one-on-one, fast-response support channel that AWS customers can subscribe to for support for AWS infrastructure Svcs.  See Also http://aws.amazon.com/premiumsupport/.</td></tr>
                <tr><td>primary key</td><td>One or two attributes that uniquely identify each item in a Amzn DynamoDB table, so that no two items can have the same key.  See Also partition key, sort key.  primary shard	See Also shard.</td></tr>
                <tr><td>principal</td><td>The user, Svc, or account that receives permissions that are defined in a policy. The principal is A in the statement "A has permission to do B to C."</td></tr>
                <tr><td>private content</td><td>When using Amzn CloudFront to serve content with an Amzn S3 bucket as the origin, a method of controlling access to your content by requiring users to use signed URLs. Signed URLs can restrict user access based on the current date & time and/or the IP addresses that the requests originate from.</td></tr>
                <tr><td>private IP address</td><td>A private numerical address (for example, 192.0.2.44) that networked devices use to communicate with one another using the Internet Prot (IP). All EC2 instancess are assigned two IP addresses at launch, which are directly mapped to each other through Ntwk Addr Translation (NAT): a private address (following RFC 1918) & a public address. Exception: Instances launched in Amzn VPC are assigned only a private IP address.</td></tr>
                <tr><td>private subnet</td><td>A VPC subnet whose instances cannot be reached from the Internet.</td></tr>
                <tr><td>product code</td><td>An identifier provided by AWS when you submit a product to AWS Marketplace.</td></tr>
                <tr><td>properties</td><td>See resource property.</td></tr>
                <tr><td>property rule</td><td>A JSON-compliant markup standard for declaring properties, mappings, & output values in an AWS CloudFormation template. </td></tr>
                <tr><td>Provisioned IOPS</td><td>A storage option designed to deliver fast, predictable, & consistent I/O performance. When you specify an IOPS rate while creating a DB instance, Amzn RDS provisions that IOPS rate for the lifetime of the DB instance.</td></tr>
                <tr><td>pseudo parameter</td><td>A predefined setting, such as AWS:StackName that can be used in AWS CloudFormation templates without having to declare them. You can use pseudo parameters anywhere you can use a regular parameter.</td></tr>
                <tr><td>public AMI</td><td>An Amzn Machine Image (AMI) that all AWS accounts have permission to launch.</td></tr>
                <tr><td>public data set</td><td>A large collection of public information that can be seamlessly integrated into AWS cloud-based Apps. Amzn stores public data sets at no charge to the community and, like all AWS Svcs, users pay only for the compute & storage they use for their own Apps. These data sets currently include data from the Human Genome Project, the U.S. Census, Wikipedia, & other sources.  See Also http://aws.amazon.com/publicdatasets.</td></tr>
                <tr><td>public IP address</td><td>A pubic numerical address (for example, 192.0.2.44) that networked devices use to communicate with one another using the Internet Prot (IP). EC2 instances are assigned two IP addresses at launch, which are directly mapped to each other through Ntwk Addr Translation (NAT): a private address (following RFC 1918) & a public address. Exception: Instances launched in Amzn VPC are assigned only a private IP address.</td></tr>
                <tr><td>public subnet</td><td>A subnet whose instances can be reached from the Internet.</td></tr>
                <tr><td>PV virtualization</td><td>Paravirtual virtualization. Allows guest VMs to run on host systems that do not have special support extensions for full hardware & CPU virtualization. Because PV guests run a modified operating system that does not use hardware emulation, they cannot provide hardware-related features such as enhanced networking or GPU support.  See Also HVM virtualization.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: Q</td><td>Q</td></tr>
                <tr><td>quartile binning transformation</td><td>Amzn Machine Learning: A process that takes two inputs, a numerical variable & a parameter called a bin number, & outputs a categorical variable. Quartile binning transformations discover non-linearity in a variable's distribution by enabling the machine learning model to learn separate importance values for parts of the numeric variable’s distribution.</td></tr>
                <tr><td>Query</td><td>A type of HTTP-based request interface that generally uses only the GET or POST HTTP method & a query string with parameters.  See Also REST, REST-Query.</td></tr>
                <tr><td>query string authentication</td><td>An AWS feature that lets you place the authentication information in the HTTP request query string instead of in the Authorization header, which enables URL-based access to objects in a bucket.</td></tr>
                <tr><td>queue</td><td>A sequence of messages or jobs that are held in temporary storage awaiting transmission or processing. </td></tr>
                <tr><td>queue URL</td><td>A web address that uniquely identifies a queue.</td></tr>
                <tr><td>quota</td><td>Amzn RDS: The maximum number of DB instances & available storage you can use.</td></tr>
                <tr><td></td><td>Amzn ElastiCache: The maximum number of the following items:</td></tr>
                <tr><td></td><td>- The number of cache clusters for each AWS account</td></tr>
                <tr><td></td><td>- The number of cache nodes per cache cluster</td></tr>
                <tr><td></td><td>- The total number of cache nodes per AWS account across all cache clusters created by that AWS account</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: R</td><td>R</td></tr>
                <tr><td>range GET</td><td>A request that specifies a byte range of data to get for a download. If an object is large, you can break up a download into smaller units by sending multiple range GET requests that each specify a different byte range to GET. </td></tr>
                <tr><td>raw email</td><td>A type of sendmail request with which you can specify the email headers & MIME types. </td></tr>
                <tr><td>RDS</td><td>See Amzn Relational DB Svc (Amzn RDS).</td></tr>
                <tr><td>read replica</td><td>Amzn RDS: An active copy of another DB instance. Any updates to the data on the source DB instance are replicated to the read replica DB instance using the built-in replication feature of MySQL 5.1.</td></tr>
                <tr><td>real-time predictions</td><td>Amzn Machine Learning: Synchronously generated predictions for individual data observations.  See Also batch prediction.</td></tr>
                <tr><td>receipt handle</td><td>Amzn SQS: An identifier that you get when you receive a message from the queue. This identifier is required to delete a message from the queue or when changing a message's visibility timeout.</td></tr>
                <tr><td>receiver</td><td>The entity that consists of the network systems, software, & policies that manage email delivery for a recipient. </td></tr>
                <tr><td>recipient</td><td>Amzn Simple Email Svc (Amzn SES): The person or entity receiving an email message. EX, a person named in the "To" field of a message.</td></tr>
                <tr><td></td><td>reference</td></tr>
                <tr><td></td><td>A means of inserting a property from one AWS resource into another. EX, you could insert an Amzn EC2 security group property into an Amzn RDS resource.</td></tr>
                <tr><td>region</td><td>A named set of AWS resources in the same geographical area. A region comprises at least two Availability Zones.</td></tr>
                <tr><td>regression model</td><td>Amzn Machine Learning: Preformatted instructions for common data transformations that fine-tune machine learning model performance.</td></tr>
                <tr><td>regression model</td><td>A type of machine learning model that predicts a numeric value, such as the exact purchase price of a house.</td></tr>
                <tr><td>regularization</td><td>A machine learning (ML) parameter that you can tune to obtain higher-quality ML models. Regularization helps prevent ML models from memorizing training data examples instead of learning how to generalize the patterns it sees (called overfitting). When training data is overfitted, the ML model performs well on the training data but does not perform well on the evaluation data or on new data.  replica shard	See Also shard.</td></tr>
                <tr><td>reply path</td><td>The email address to which an email reply is sent. This is different from the return path.</td></tr>
                <tr><td>reputation</td><td>1. An Amzn SES metric, based on factors that might include bounces, complaints, & other metrics, regarding whether or not a customer is sending high-quality email.</td></tr>
                <tr><td></td><td>2. A measure of confidence, as judged by an Internet Svc provider or other entity that an IP address that they are receiving email from is not the source of spam.</td></tr>
                <tr><td>requester</td><td>The person (or App) that sends a request to AWS to perform a specific action. When AWS receives a request, it first evaluates the requester's permissions to determine whether the requester is allowed to perform the request action (if applicable, for the requested resource).</td></tr>
                <tr><td>Requester Pays</td><td>An Amzn S3 feature that allows a bucket owner to specify that anyone who requests access to objects in a particular bucket must pay the data transfer & request costs.</td></tr>
                <tr><td>reservation</td><td>A collection of EC2 instances started as part of the same launch request. Not to be confused with a Reserved Instance.</td></tr>
                <tr><td>Reserved Instance</td><td>A pricing option for EC2 instances that discounts the on-demand usage charge for instances that meet the specified parameters. Customers pay for the entire term of the instance, regardless of how they use it.</td></tr>
                <tr><td>Reserved Instance Marketplace</td><td>An online exchange that matches sellers who have reserved capacity that they no longer need with buyers who are looking to purchase additional capacity. Reserved Instances that you purchase from third-party sellers have less than a full standard term remaining & can be sold at different upfront prices. The usage or reoccurring fees remain the same as the fees set when the Reserved Instances were originally purchased. Full standard terms for Reserved Instances available from AWS run for one year or three years.</td></tr>
                <tr><td>resource</td><td>An entity that users can work with in AWS, such as an EC2 instance, a Amzn DynamoDB table, an Amzn S3 bucket, an IAM user, an AWS OpsWorks stack, & so on.</td></tr>
                <tr><td>resource property</td><td>A value required when including an AWS resource in an AWS CloudFormation stack. Each resource may have one or more properties associated with it. EX, an AWS::EC2::Instance resource may have a UserData property. In an AWS CloudFormation template, resources must declare a properties section, even if the resource has no properties.</td></tr>
                <tr><td>resource record</td><td>Also called resource record set. The fundamental information elements in the Domain Name System (DNS).  See Also Domain Name System in Wikipedia.</td></tr>
                <tr><td>REST</td><td>A type of HTTP-based request interface that generally uses only the GET or POST HTTP method & a query string with parameters. Sometimes known as Query. In some implementations of a REST interface, other HTTP verbs besides GET & POST are used.</td></tr>
                <tr><td>REST-Query</td><td>Also known as Query or HTTP Query. This is a type of HTTP request that generally uses only the GET or POST HTTP method & a query string with parameters. Compare this with REST, which is a type of HTTP request that uses any HTTP method (GET, DELETE, POST, etc.), a resource, HTTP headers, & possibly a query string with parameters. </td></tr>
                <tr><td>return enabled</td><td>Amzn CloudSearch: An index field option that enables the field's values to be returned in the search results.</td></tr>
                <tr><td>return path</td><td>The email address to which bounced email is returned. The return path is specified in the header of the original email. This is different from the reply path.</td></tr>
                <tr><td>revision</td><td>AWS CodePipeline: A change made to a source that is configured in a source action, such as a pushed commit to a GitHub repository or an update to a file in a versioned Amzn S3 bucket. </td></tr>
                <tr><td>role</td><td>A tool for giving temporary access to AWS resources in your AWS account.</td></tr>
                <tr><td>rollback</td><td>A return to a previous state that follows the failure to create an object, such as AWS CloudFormation stack. All resources associated with the failure are deleted during the rollback. For AWS CloudFormation, you can override this behavior using the --disable-rollback option on the command line.</td></tr>
                <tr><td>root credentials</td><td>Authentication information associated with the AWS account owner. </td></tr>
                <tr><td>root device volume</td><td>A volume that contains the image used to boot the instance. If you launched the instance from an AMI backed by instance store, this is an instance store volume created from a template stored in Amzn S3. If you launched the instance from an AMI backed by Amzn EBS, this is an Amzn EBS volume created from an Amzn EBS snapshot.</td></tr>
                <tr><td>route table</td><td>A set of routing rules that controls the traffic leaving any subnet that is associated with the route table. You can associate multiple subnets with a single route table, but a subnet can be associated with only one route table at a time.</td></tr>
                <tr><td>row identifier</td><td>row ID.Amzn Machine Learning: An attribute in the input data that you can include in the evaluation or prediction output to make it easier to associate a prediction with an observation.</td></tr>
                <tr><td>rule</td><td>AWS WAF: A set of conditions that AWS WAF searches for in web requests to AWS resources such as Amzn CloudFront distributions. You add rules to a web ACL, & then specify whether you want to allow or block web requests based on each rule.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: S</td><td>S</td></tr>
                <tr><td>S3</td><td>See Amzn Simple Storage Svc (Amzn S3).</td></tr>
                <tr><td>sampling period</td><td>A defined duration of time, such as one minute, over which Amzn CloudWatch computes a statistic. </td></tr>
                <tr><td>sandbox</td><td>A testing location where you can test the functionality of your App without affecting production, incurring charges, or purchasing products.</td></tr>
                <tr><td></td><td>Amzn SES: An environment that is designed for developers to test & evaluate the Svc. In the sandbox, you have full access to the Amzn SES API, but you can only send messages to verified email addresses & the mailbox simulator. To get out of the sandbox, you need to apply for production access. Accounts in the sandbox also have lower sending limits than production accounts.</td></tr>
                <tr><td>scale in</td><td>To remove EC2 instances from an Auto Scaling group.</td></tr>
                <tr><td>scale out</td><td>To add EC2 instances to an Auto Scaling group.</td></tr>
                <tr><td>scaling policy</td><td>A description of how Auto Scaling should automatically scale an Auto Scaling group in response to changing demand.</td></tr>
                <tr><td>scaling activity</td><td>A process that changes the size, configuration, or makeup of an Auto Scaling group by launching or terminating instances.</td></tr>
                <tr><td>scheduler</td><td>The method used for placing tasks on container instances. </td></tr>
                <tr><td>schema</td><td>Amzn Machine Learning: The information needed to interpret the input data for a machine learning model, including attribute names & their assigned data types, & the names of special attributes.</td></tr>
                <tr><td>score cut-off value</td><td>Amzn Machine Learning: A binary classification models output a score that ranges from 0 to 1. To decide whether an observation should be classified as 1 or 0, you pick a classification threshold, or cut-off, & Amzn ML compares the score against it. Observations with scores higher than the cut-off are predicted as target equals 1, & scores lower than the cut-off are predicted as target equals 0.</td></tr>
                <tr><td>search API</td><td>Amzn CloudSearch: The API that you use to submit search requests to a search domain. </td></tr>
                <tr><td>search domain</td><td>Amzn CloudSearch: Encapsulates your searchable data & the search instances that handle your search requests. You typically set up a separate Amzn CloudSearch domain for each different collection of data that you want to search.</td></tr>
                <tr><td>search domain configuration</td><td>Amzn CloudSearch: An domain's indexing options, analysis schemes, expressions, suggesters, access policies, & scaling & availability options. </td></tr>
                <tr><td>search enabled</td><td>Amzn CloudSearch: An index field option that enables the field data to be searched. </td></tr>
                <tr><td>search endpoint</td><td>Amzn CloudSearch: The URL that you connect to when sending search requests to a search domain. Each Amzn CloudSearch domain has a unique search endpoint that remains the same for the life of the domain.</td></tr>
                <tr><td>search index</td><td>Amzn CloudSearch: A representation of your searchable data that facilitates fast & accurate data retrieval.</td></tr>
                <tr><td>search instance</td><td>Amzn CloudSearch: A compute resource that indexes your data & processes search requests. An Amzn CloudSearch domain has one or more search instances, each with a finite amount of RAM & CPU resources. As your data volume grows, more search instances or larger search instances are deployed to contain your indexed data. When necessary, your index is automatically partitioned across multiple search instances. As your request volume or complexity increases, each search partition is automatically replicated to provide additional processing capacity. </td></tr>
                <tr><td>search request</td><td>Amzn CloudSearch: A request that is sent to an Amzn CloudSearch domain's search endpoint to retrieve documents from the index that match particular search criteria. </td></tr>
                <tr><td>search result</td><td>Amzn CloudSearch: A document that matches a search request. Also referred to as a search hit. </td></tr>
                <tr><td>secret access key</td><td>A key that is used in conjunction with the access key ID to cryptographically sign programmatic AWS requests. Signing a request identifies the sender & prevents the request from being altered. You can generate secret access keys for your AWS account, individual IAM users, & temporary sessions.</td></tr>
                <tr><td>security group</td><td>A named set of allowed inbound network connections for an instance. (Security groups in Amzn VPC also include support for outbound connections.) Each security group consists of a list of protocols, ports, & IP address ranges. A security group can apply to multiple instances, & multiple groups can regulate a single instance. </td></tr>
                <tr><td>sender</td><td>The person or entity sending an email message.</td></tr>
                <tr><td>Sender ID</td><td>A Microsoft-controlled version of SPF. An email authentication & anti-spoofing system. For more information about Sender ID, see Sender ID in Wikipedia.</td></tr>
                <tr><td>sending limits</td><td>The sending quota & maximum send rate that are associated with every Amzn SES account.</td></tr>
                <tr><td>sending quota</td><td>The maximum number of email messages that you can send using Amzn SES in a 24-hour period.</td></tr>
                <tr><td>server-side encryption (SSE)</td><td>The encrypting of data at the server level. Amzn S3 supports three modes of server-side encryption: SSE-S3, in which Amzn S3 manages the keys; SSE-C, in which the customer manages the keys; & SSE-KMS, in which AWS Key Mgmt Svc (AWS KMS) manages keys.</td></tr>
                <tr><td>Svc</td><td>See Amzn ECS Svc.</td></tr>
                <tr><td>Svc endpoint</td><td>See endpoint.</td></tr>
                <tr><td>Svc health dashboard</td><td>A web page showing up-to-the-minute information about AWS Svc availability. The dashboard is located at http://status.aws.amazon.com/.</td></tr>
                <tr><td>Svc role</td><td>An IAM role that grants permissions to an AWS Svc so it can access AWS resources. The policies that you attach to the Svc role determine which AWS resources the Svc can access & what it can do with those resources.</td></tr>
                <tr><td>SES</td><td>See Amzn Simple Email Svc (Amzn SES).</td></tr>
                <tr><td>session</td><td>The period during which the temporary security credentials provided by AWS Security Token Svc (AWS STS) allow access to your AWS account.</td></tr>
                <tr><td>SHA</td><td>Secure Hash Algorithm. SHA1 is an earlier version of the algorithm, which AWS has deprecated in favor of SHA256. </td></tr>
                <tr><td>shard</td><td>Amzn Elasticsearch Svc (Amzn ES): A partition of data in an index. You can split an index into multiple shards, which can include primary shards (original shards) & replica shards (copies of the primary shards). Replica shards provide failover, which means that a replica shard is promoted to a primary shard if a cluster node that contains a primary shard fails. Replica shards also can handle requests.</td></tr>
                <tr><td>shared AMI</td><td>An Amzn Machine Image (AMI) that a developer builds & makes available for others to use. </td></tr>
                <tr><td>shutdown action</td><td>Amzn EMR: A predefined bootstrap action that launches a script that executes a series of commands in parallel before terminating the job flow. </td></tr>
                <tr><td>signature</td><td>Refers to a digital signature, which is a mathematical way to confirm the authenticity of a digital message. AWS uses signatures to authenticate the requests you send to our web Svcs. For more information, to http://aws.amazon.com/security. </td></tr>
                <tr><td>SIGNATURE file</td><td>AWS Import/Export: A file you copy to the root directory of your storage device. The file contains a job ID, manifest file, & a signature.</td></tr>
                <tr><td>Signature Version 4</td><td>Prot for authenticating inbound API requests to AWS Svcs in all AWS regions.</td></tr>
                <tr><td>Simple Mail Transfer Prot</td><td>See SMTP.</td></tr>
                <tr><td>Simple Storage Svc</td><td>See Amzn Simple Storage Svc (Amzn S3).</td></tr>
                <tr><td>Single-AZ DB instance</td><td>A standard (non-Multi-AZ) DB instance that is deployed in one Availability Zone, without a standby replica in another Availability Zone.  See Also Multi-AZ deployment.</td></tr>
                <tr><td>sloppy phrase search</td><td>A search for a phrase that specifies how close the terms must be to one another to be considered a match. </td></tr>
                <tr><td>SMTP</td><td>Simple Mail Transfer Prot. The standard that is used to exchange email messages between Internet hosts for the purpose of routing & delivery.</td></tr>
                <tr><td>snapshot</td><td>Amzn Elastic Block Store (Amzn EBS): A backup of your volumes that is stored in Amzn S3. You can use these snapshots as the starting point for new Amzn EBS volumes or to protect your data for long-term durability.  See Also DB snapshot.</td></tr>
                <tr><td>SNS</td><td>See Amzn Simple Notification Svc (Amzn SNS).</td></tr>
                <tr><td>Snowball</td><td>An AWS Import/Export feature that uses Amzn-owned Snowball appliances for transferring your data.  See Also http://aws.amazon.com/importexport.</td></tr>
                <tr><td>soft bounce</td><td>A temporary email delivery failure such as one resulting from a full mailbox.</td></tr>
                <tr><td>software VPN</td><td>A software appliance-based VPN connection over the Internet. </td></tr>
                <tr><td>sort enabled</td><td>Amzn CloudSearch: An index field option that enables a field to be used to sort the search results.</td></tr>
                <tr><td>sort key</td><td>An attribute used to sort the order of partition keys in a composite primary key (also known as a range attribute).  See Also partition key, primary key.</td></tr>
                <tr><td>source/destination checking</td><td>A security measure to verify that an EC2 instance is the origin of all traffic that it sends & the ultimate destination of all traffic that it receives; that is, that the instance is not relaying traffic. Source/destination checking is enabled by default. For instances that function as gateways, such as VPC NAT instances, source/destination checking must be disabled.</td></tr>
                <tr><td>spam</td><td>Unsolicited bulk email.</td></tr>
                <tr><td>spamtrap</td><td>An email address that is set up by an anti-spam entity, not for correspondence, but to monitor unsolicited email. This is also called a honeypot.</td></tr>
                <tr><td>SPF</td><td>Sender Policy Framework. A standard for authenticating email.  See Also http://www.openspf.org.</td></tr>
                <tr><td>Spot Instance</td><td>A type of EC2 instance that you can bid on to take advantage of unused Amzn EC2 capacity.</td></tr>
                <tr><td>Spot price</td><td>The price for a Spot Instance at any given time. If your maximum price exceeds the current price & your restrictions are met, Amzn EC2 launches instances on your behalf. </td></tr>
                <tr><td>SQL injection match condition</td><td>AWS WAF: An attribute that specifies the part of web requests, such as a header or a query string, that AWS WAF inspects for malicious SQL code. Based on the specified conditions, you can configure AWS WAF to allow or block web requests to AWS resources such as Amzn CloudFront distributions. </td></tr>
                <tr><td>SQS</td><td>See Amzn Simple Queue Svc (Amzn SQS).</td></tr>
                <tr><td>SSE</td><td>See server-side encryption (SSE).</td></tr>
                <tr><td>SSL</td><td>Secure Sockets Layer See Also Transport Layer Security.</td></tr>
                <tr><td>stack</td><td>AWS CloudFormation: A collection of AWS resources that you create & delete as a single unit.</td></tr>
                <tr><td></td><td>AWS OpsWorks: A set of instances that you manage collectively, typically because they have a common purpose such as serving PHP Apps. A stack serves as a container & handles tasks that apply to the group of instances as a whole, such as managing Apps & cookbooks.</td></tr>
                <tr><td>station</td><td>AWS CodePipeline: A portion of a pipeline workflow where one or more actions are performed.</td></tr>
                <tr><td>station</td><td>A place at an AWS facility where your AWS Import/Export data is transferred on to, or off of, your storage device.</td></tr>
                <tr><td>statistic</td><td>One of five functions of the values submitted for a given sampling period. These functions are Maximum, Minimum, Sum, Average, & SampleCount.</td></tr>
                <tr><td>stem</td><td>The common root or substring shared by a set of related words. </td></tr>
                <tr><td>stemming</td><td>The process of mapping related words to a common stem. This enables matching on variants of a word. EX, a search for "horse" could return matches for horses, horseback, & horsing, as well as horse. Amzn CloudSearch supports both dictionary based & algorithmic stemming.</td></tr>
                <tr><td>step</td><td>Amzn EMR: A single function applied to the data in a job flow. The sum of all steps comprises a job flow.</td></tr>
                <tr><td>step type</td><td>Amzn EMR: The type of work done in a step. There are a limited number of step types, such as moving data from Amzn S3 to Amzn EC2 or from Amzn EC2 to Amzn S3. </td></tr>
                <tr><td>sticky session</td><td>A feature of the Elastic Load Balancing load balancer that binds a user's session to a specific App instance so that all requests coming from the user during the session are sent to the same App instance. By contrast, a load balancer defaults to route each request independently to the App instance with the smallest load. </td></tr>
                <tr><td>stopping</td><td>The process of filtering stop words from an index or search request.</td></tr>
                <tr><td>stopword</td><td>A word that is not indexed & is automatically filtered out of search requests because it is either insignificant or so common that including it would result in too many matches to be useful. Stop words are language-specific. </td></tr>
                <tr><td>streaming</td><td>Amzn EMR (Amzn EMR): A utility that comes with Hadoop that enables you to develop MapReduce executables in languages other than Java. </td></tr>
                <tr><td></td><td>Amzn CloudFront: The ability to use a media file in real time—as it is transmitted in a steady stream from a server.</td></tr>
                <tr><td>streaming distribution</td><td>A special kind of distribution that serves streamed media files using a Real Time Messaging Prot (RTMP) connection.</td></tr>
                <tr><td>Streams</td><td>See Amzn Kinesis Streams.</td></tr>
                <tr><td>string-to-sign</td><td>Before you calculate an HMAC signature, you first assemble the required components in a canonical order. The preencrypted string is the string-to-sign.</td></tr>
                <tr><td>string match condition</td><td>AWS WAF: An attribute that specifies the strings that AWS WAF searches for in a web request, such as a value in a header or a query string. Based on the specified strings, you can configure AWS WAF to allow or block web requests to AWS resources such as CloudFront distributions.</td></tr>
                <tr><td>strongly consistent read</td><td>A read process that returns a response with the most up-to-date data, reflecting the updates from all prior write operations that were successful—regardless of the region.  See Also data consistency, eventual consistency, eventually consistent read.</td></tr>
                <tr><td>structured query</td><td>Search criteria specified using the Amzn CloudSearch structured query language. You use the structured query language to construct compound queries that use advanced search options & combine multiple search criteria using Boolean operators. </td></tr>
                <tr><td>STS</td><td>See AWS Security Token Svc (AWS STS).</td></tr>
                <tr><td>subnet</td><td>A segment of the IP address range of a VPC that EC2 instances can be attached to. You can create subnets to group instances according to security & operational needs. </td></tr>
                <tr><td>Subscription button</td><td>An HTML-coded button that enables an easy way to charge customers a recurring fee.</td></tr>
                <tr><td>suggester</td><td>Amzn CloudSearch: Specifies an index field you want to use to get autocomplete suggestions & options that can enable fuzzy matches & control how suggestions are sorted.</td></tr>
                <tr><td>suggestions</td><td>Documents that contain a match for the partial search string in the field designated by the suggester. Amzn CloudSearch suggestions include the document IDs & field values for each matching document. To be a match, the string must match the contents of the field starting from the beginning of the field. </td></tr>
                <tr><td>supported AMI</td><td>An Amzn Machine Image (AMI) similar to a paid AMI, except that the owner charges for additional software or a Svc that customers use with their own AMIs.</td></tr>
                <tr><td>SWF</td><td>See Amzn Simple Workflow Svc (Amzn SWF).</td></tr>
                <tr><td>symmetric encryption</td><td>Encryption that uses a private key only.  See Also asymmetric encryption.</td></tr>
                <tr><td>synchronous bounce</td><td>A type of bounce that occurs while the email servers of the sender & receiver are actively communicating.</td></tr>
                <tr><td>synonym</td><td>A word that is the same or nearly the same as an indexed word & that should produce the same results when specified in a search request. EX, a search for "Rocky Four" or "Rocky 4" should return the fourth Rocky movie. This can be done by designating that four & 4 are synonyms for IV. Synonyms are language-specific. </td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: T</td><td>T</td></tr>
                <tr><td>table</td><td>A collection of data. Similar to other DB systems, DynamoDB stores data in tables. </td></tr>
                <tr><td>tag</td><td>Metadata that you can define & assign to AWS resources, such as an EC2 instance. Not all AWS resources can be tagged.</td></tr>
                <tr><td>tagging</td><td>Tagging resources: Applying a tag to an AWS resource.</td></tr>
                <tr><td></td><td>Amzn SES: Also called labeling. A way to format return path email addresses so that you can specify a different return path for each recipient of a message. Tagging enables you to support VERP. EX, if Andrew manages a mailing list, he can use the return paths andrew+recipient1@example.net & andrew+recipient2@example.net so that he can determine which email bounced.</td></tr>
                <tr><td>target attribute</td><td>Amzn Machine Learning (Amzn ML ): The attribute in the input data that contains the “correct” answers. Amzn ML uses the target attribute to learn how to make predictions on new data. EX, if you were building a model for predicting the sale price of a house, the target attribute would be “target sale price in USD.”</td></tr>
                <tr><td>target revision</td><td>AWS CodeDeploy: The most recent version of the App revision that has been uploaded to the repository & will be deployed to the instances in a deployment group. In other words, the App revision currently targeted for deployment. This is also the revision that will be pulled for automatic deployments.</td></tr>
                <tr><td>task</td><td>An instantiation of a task definition that is running on a container instance. </td></tr>
                <tr><td>task definition</td><td>The blueprint for your task. Specifies the name of the task, revisions, container definitions, & volume information. </td></tr>
                <tr><td>task node</td><td>An EC2 instance that runs Hadoop map & reduce tasks, but does not store data. Task nodes are managed by the master node, which assigns Hadoop tasks to nodes & monitors their status. While a job flow is running you can increase & decrease the number of task nodes. Because they don't store data & can be added & removed from a job flow, you can use task nodes to manage the EC2 instance capacity your job flow uses, increasing capacity to handle peak loads & decreasing it later.</td></tr>
                <tr><td></td><td>Task nodes only run a TaskTracker Hadoop daemon.</td></tr>
                <tr><td>tebibyte</td><td>A contraction of tera binary byte, a tebibyte is 2^40 or 1,099,511,627,776 bytes. A terabyte (TB) is 10^12 or 1,000,000,000,000 bytes. 1,024 TiB is a pebibyte.</td></tr>
                <tr><td>template format version</td><td>The version of an AWS CloudFormation template design that determines the available features. If you omit the AWSTemplateFormatVersion section from your template, AWS CloudFormation assumes the most recent format version.</td></tr>
                <tr><td>template validation</td><td>The process of confirming the use of JSON code in an AWS CloudFormation template. You can validate any AWS CloudFormation template using the cfn-validate-template command.</td></tr>
                <tr><td>temporary security credentials</td><td>Authentication information that is provided by AWS STS when you call an STS API action. Includes an access key ID, a secret access key, a session token, & an expiration time.</td></tr>
                <tr><td>throttling</td><td>The automatic restricting or slowing down of a process based on one or more limits. Examples: Amzn Kinesis Streams throttles operations if an App (or group of Apps operating on the same stream) attempts to get data from a shard at a rate faster than the shard limit. Amzn API Gateway uses throttling to limit the steady-state request rates for a single account. Amzn SES uses throttling to reject attempts to send email that exceeds the sending limits.</td></tr>
                <tr><td>time series data</td><td>Data provided as part of a metric. The time value is assumed to be when the value occurred. A metric is the fundamental concept for Amzn CloudWatch & represents a time-ordered set of data points. You publish metric data points into CloudWatch & later retrieve statistics about those data points as a time-series ordered data set.</td></tr>
                <tr><td>time stamp</td><td>A date/time string in ISO 8601 format.</td></tr>
                <tr><td>TLS</td><td>See Transport Layer Security.</td></tr>
                <tr><td>tokenization</td><td>The process of splitting a stream of text into separate tokens on detectable boundaries such as whitespace & hyphens.</td></tr>
                <tr><td>topic</td><td>A communication channel to send messages & subscribe to notifications. It provides an access point for publishers & subscribers to communicate with each other.</td></tr>
                <tr><td>training datasource</td><td>A datasource that contains the data that Amzn Machine Learning uses to train the machine learning model to make predictions.</td></tr>
                <tr><td>transition</td><td>AWS CodePipeline: The act of a revision in a pipeline continuing from one stage to the next in a workflow.</td></tr>
                <tr><td>Transport Layer Security</td><td>A cryptographic protocol that provides security for communication over the Internet. Its predecessor is Secure Sockets Layer (SSL).</td></tr>
                <tr><td>trust policy</td><td>An IAM policy that is an inherent part of an IAM role. The trust policy specifies which principals are allowed to use the role.</td></tr>
                <tr><td>trusted signers</td><td>AWS accounts that the CloudFront distribution owner has given permission to create signed URLs for a distribution's content.</td></tr>
                <tr><td>tuning</td><td>Selecting the number & type of AMIs to run a Hadoop job flow most efficiently.</td></tr>
                <tr><td>tunnel</td><td>A route for transmission of private network traffic that uses the Internet to connect nodes in the private network. The tunnel uses encryption & secure protocols such as PPTP to prevent the traffic from being intercepted as it passes through public routing nodes. </td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: U</td><td>U</td></tr>
                <tr><td>unbounded</td><td>The number of potential occurrences is not limited by a set number. This value is often used when defining a data type that is a list (for example, maxOccurs="unbounded"), in Web Svcs Description Language.</td></tr>
                <tr><td>unit</td><td>Standard measurement for the values submitted to Amzn CloudWatch as metric data. Units include seconds, percent, bytes, bits, count, bytes/second, bits/second, count/second, & none.</td></tr>
                <tr><td>unlink from VPC</td><td>The process of unlinking (or detaching) an EC2-Classic instance from a ClassicLink-enabled VPC.  See Also ClassicLink, link to VPC.</td></tr>
                <tr><td>usage report</td><td>An AWS record that details your usage of a particular AWS Svc. You can generate & download usage reports from http://aws.amazon.com/usage-reports/.</td></tr>
                <tr><td>user</td><td>A person or App under an account that needs to make API calls to AWS products. Each user has a unique name within the AWS account, & a set of security credentials not shared with other users. These credentials are separate from the AWS account's security credentials. Each user is associated with one & only one AWS account.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: V</td><td>V</td></tr>
                <tr><td>validation</td><td>See template validation.</td></tr>
                <tr><td>value</td><td>Instances of attributes for an item, such as cells in a spreadsheet. An attribute might have multiple values.</td></tr>
                <tr><td></td><td>Tagging resources: A specific tag label that acts as a descriptor within a tag category (key). EX, you might have EC2 instance with the tag key of Owner & the tag value of Jan. You can tag an AWS resource with up to 10 key–value pairs. Not all AWS resources can be tagged.</td></tr>
                <tr><td>Variable Envelope Return Path</td><td>See VERP.</td></tr>
                <tr><td>verification</td><td>The process of confirming that you own an email address or a domain so that you can send email from or to it.</td></tr>
                <tr><td>VERP</td><td>Variable Envelope Return Path. A way in which email sending Apps can match bounced email with the undeliverable address that caused the bounce by using a different return path for each recipient. VERP is typically used for mailing lists. With VERP, the recipient's email address is embedded in the address of the return path, which is where bounced email is returned. This makes it possible to automate the processing of bounced email without having to open the bounce messages, which may vary in content.</td></tr>
                <tr><td>versioning</td><td>Every object in Amzn S3 has a key & a version ID. Objects with the same key, but different version IDs can be stored in the same bucket. Versioning is enabled at the bucket layer using PUT Bucket versioning. </td></tr>
                <tr><td>virtualization</td><td>Allows multiple guest virtual machines (VM) to run on a host operating system. Guest VMs can run on one or more levels above the host hardware, depending on the type of virtualization.  See Also PV virtualization, HVM virtualization.</td></tr>
                <tr><td>virtual private cloud</td><td>See VPC.</td></tr>
                <tr><td>virtual private gateway</td><td>See VPG.</td></tr>
                <tr><td>visibility timeout</td><td>The period of time that a message is invisible to the rest of your App after an App component gets it from the queue. During the visibility timeout, the component that received the message usually processes it, & then deletes it from the queue. This prevents multiple components from processing the same message.</td></tr>
                <tr><td>volume</td><td>A fixed amount of storage on an instance. You can share volume data between containers & persist the data on the container instance when the containers are no longer running. </td></tr>
                <tr><td>VPC</td><td>Virtual private cloud. An elastic network populated by infrastructure, platform, & App Svcs that share common security & interconnection.</td></tr>
                <tr><td>VPC endpoint</td><td>A feature that enables you to create a private connection between your VPC & an another AWS Svc without requiring access over the Internet, through a NAT instance, a VPN connection, or AWS Direct Connect. </td></tr>
                <tr><td>VPG</td><td>Virtual private gateway. The Amzn side of a VPN connection that maintains connectivity. The internal interfaces of the virtual private gateway connect to your VPC via the VPN attachment & the external interfaces connect to the VPN connection, which leads to the customer gateway.</td></tr>
                <tr><td>VPN CloudHub</td><td>See AWS VPN CloudHub.</td></tr>
                <tr><td>VPN connection</td><td>Amzn Web Svcs (AWS): The IPsec connection between a VPC & some other network, such as a corporate data center, home network, or co-location facility.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: W</td><td>W</td></tr>
                <tr><td>WAM</td><td>See Amzn WorkSpaces App Mgr (Amzn WAM).</td></tr>
                <tr><td>web access control list</td><td>AWS WAF: A set of rules that defines the conditions that AWS WAF searches for in web requests to AWS resources such as Amzn CloudFront distributions. A web access control list (web ACL) specifies whether to allow, block, or count the requests.</td></tr>
                <tr><td>Web Svcs Description Language</td><td>A language used to describe the actions that a web Svc can perform, along with the syntax of action requests & responses. Your SOAP or other toolkit interprets a WSDL file to provide your App access to the actions provided by the web Svc. For most toolkits, your App calls a Svc action using routines & classes provided or generated by the toolkit.</td></tr>
                <tr><td></td></tr>
                <tr><td>SECTION: X, Y, Z</td><td>X, Y, Z</td></tr>
                <tr><td>X.509 certificate</td><td>An digital document that uses the X.509 public key infrastructure (PKI) standard to verify that a public key belongs to the entity described in the certificate.</td></tr>
                <tr><td>yobibyte</td><td>A contraction of yotta binary byte, a yobibyte is 2^80 or 1,208,925,819,614,629,174,706,176 bytes. A yottabyte (YB) is 10^24 or 1,000,000,000,000,000,000,000,000 bytes.</td></tr>
                <tr><td>zebibyte</td><td>A contraction of zetta binary byte, a zebibyte is 2^70 or 1,180,591,620,717,411,303,424 bytes. A zettabyte (ZB) is 10^21 or 1,000,000,000,000,000,000,000 bytes. 1,024 ZiB is a yobibyte.</td></tr>
                <tr><td>zone awareness</td><td>Amzn Elasticsearch Svc (Amzn ES): A configuration that distributes nodes in a cluster across two Availability Zones in the same region. Zone awareness helps to prevent data loss & minimizes downtime in the event of node & data center failure. If you enable zone awareness, you must have an even number of data instances in the instance count, & you also must use the Amzn Elasticsearch Svc Configuration API to replicate your data for your Elasticsearch cluster.</td></tr>
              </tbody>
            </table>
            </main>
        </div>
    )
}
            